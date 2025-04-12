const db = require("../prisma/queries");

async function getUsers(req, res) {
  res.json({ users: await db.getUsers() });
}

async function getUser(req, res) {
  const user = await db.getUserById(Number(req.params.id));
  if (!user) {
    res.status(404).json({
      error: "User not found",
    });
  }
  res.json({
    user,
  });
}

async function addUser(req, res) {
  await db.addUser(req.body.email, req.body.name, req.body.password);
  res.json({
    message: `added user ${req.body.name} with ${req.body.email} email`,
  });
}

async function deleteUser(req, res) {
  const message = await db.deleteUser(Number(req.params.id));
  res.json({
    message,
  });
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
};
