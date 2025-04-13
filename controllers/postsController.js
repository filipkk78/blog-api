const db = require("../prisma/queries");
const jwt = require("jsonwebtoken");

async function getPosts(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      res.json({ posts: await db.getPosts() });
    }
  });
}

async function getPublishedPosts(req, res) {
  res.json({ posts: await db.getPublishedPosts() });
}

async function getPost(req, res) {
  const post = await db.getPostById(Number(req.params.id));
  if (!post) {
    res.status(404).json({
      error: "Post not found",
    });
  } else {
    res.json({
      post,
    });
  }
}

async function addPost(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      await db.addPost(
        req.body.title,
        req.body.content,
        Number(req.body.authorId)
      );
      res.json({
        message: `added post ${req.body.title} with author id ${req.body.authorId}`,
      });
    }
  });
}

async function deletePost(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const message = await db.deletePost(Number(req.params.id));
      if (!message) {
        return res.status(404).json({
          error: "Post not found",
        });
      }
      res.json({
        message,
      });
    }
  });
}

async function editPost(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const message = await db.togglePublishPost(Number(req.params.id));
      if (!message) {
        return res.status(404).json({
          error: "Post not found",
        });
      }
      res.json({
        message,
      });
    }
  });
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  editPost,
  getPublishedPosts,
};
