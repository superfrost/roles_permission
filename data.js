const ROLE = {
  admin: 'admin',
  basic: 'basic',
}

module.exports = {
  ROLE: ROLE,
  users: [
    {id: 1, name: "Anton", role: ROLE.admin},
    {id: 2, name: "Lera", role: ROLE.basic},
    {id: 3, name: "Misha", role: ROLE.basic},
  ],
  projects: [
    {id: 1, name: "Anton's Project", userId: 1},
    {id: 2, name: "Lera's Project", userId: 2},
    {id: 3, name: "Misha's Project", userId: 3},
  ]
}