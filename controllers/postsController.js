const db = require("../prisma/queries");

async function getPosts(req, res) {
  res.json({ posts: await db.getPosts() });
}

async function addPost(req, res) {
  await db.addPost(req.body.title, req.body.content, Number(req.body.authorId));
  res.json({
    message: `added post ${req.body.title} with author id ${req.body.authorId}`,
  });
}

module.exports = {
  getPosts,
  addPost,
};
