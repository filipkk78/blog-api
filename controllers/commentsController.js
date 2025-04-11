const db = require("../prisma/queries");

async function getComments(req, res) {
  res.json({ comments: await db.getComments() });
}

module.exports = {
  getComments,
};
