const db = require("../prisma/queries");

async function getUsers(req, res) {
  res.json({ users: await db.getUsers() });
}

async function addUser(req, res) {
  await db.addUser(req.body.email, req.body.name, req.body.password);
  res.json({
    message: `added user ${req.body.name} with ${req.body.email} email`,
  });
}

module.exports = {
  getUsers,
  addUser,
};
