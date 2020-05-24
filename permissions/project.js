const { ROLE } = require("../data")


function canViewProject(user, project) {
  return (
    user.role === ROLE.admin ||
    project.userId === user.id
  )
}

function scopedProjects(user, projects) {
  if(user.role === ROLE.admin) return projects
  return projects.filter(project => project.userId === user.id)
}

function canDeleteProject(user, project) {
  return project.userId === user.id
}

module.exports = { canViewProject, scopedProjects, canDeleteProject }