const db = require("../prisma/queries");
const jwt = require("jsonwebtoken");

async function getUsers(req, res) {
  res.json({ users: await db.getUsers() });
}

async function addUser(req, res) {
  const message = await db.addUser(
    req.body.email,
    req.body.name,
    req.body.password,
    req.body.adminPwd
  );
  res.json({
    message,
  });
}

async function deleteUser(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const message = await db.deleteUser(Number(req.params.id));
      if (!message) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      res.json({
        message,
      });
    }
  });
}

module.exports = {
  getUsers,
  addUser,
  deleteUser,
};
