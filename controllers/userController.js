const db = require("../prisma/queries");

async function getUsers(req, res) {
  res.json({ users: await db.getUsers() });
}

async function getUser(req, res) {
  res.json({
    user: await db.getUserById(Number(req.params.id)),
  });
}

async function addUser(req, res) {
  await db.addUser(req.body.email, req.body.name, req.body.password);
  res.json({
    message: `added user ${req.body.name} with ${req.body.email} email`,
  });
}

async function deleteUser(req, res) {
  await db.deleteUser(Number(req.params.id));
  res.json({
    message: `deleted user of id ${req.params.id}`,
  });
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
};
