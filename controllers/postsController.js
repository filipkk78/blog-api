const db = require("../prisma/queries");

async function getPosts(req, res) {
  res.json({ posts: await db.getPosts() });
}

module.exports = {
  getPosts,
};
