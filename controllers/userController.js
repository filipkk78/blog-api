const db = require("../prisma/queries");

async function getUsers(req, res) {
  res.json({ users: await db.getUsers() });
}

module.exports = {
  getUsers,
};
