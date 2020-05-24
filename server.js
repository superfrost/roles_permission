const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const { ROLE, users } = require("./data")
const { authUser, authRole } = require("./basicAuth")

const projectsRouter = require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use("/projects", projectsRouter)

app.get("/", (req, res) => {
  res.send("Home page")
})

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard page")
})

app.get("/admin", authUser, authRole(ROLE.admin), (req, res) => {
  res.send("Admin page")
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if(userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(PORT, () => {
  console.log("Server start on http://localhost:" + PORT);
  
})