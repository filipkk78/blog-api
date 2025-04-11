const db = require("../prisma/queries");

async function getPosts(req, res) {
  res.json({ posts: await db.getPosts() });
}

async function getPost(req, res) {
  res.json({
    post: await db.getPostById(Number(req.params.id)),
  });
}

async function addPost(req, res) {
  await db.addPost(req.body.title, req.body.content, Number(req.body.authorId));
  res.json({
    message: `added post ${req.body.title} with author id ${req.body.authorId}`,
  });
}

async function deletePost(req, res) {
  const message = await db.deletePost(Number(req.params.id));
  res.json({
    message,
  });
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
};
