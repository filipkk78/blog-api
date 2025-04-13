const { Router } = require("express");
const postsRouter = Router();
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  editPost,
  getPublishedPosts,
} = require("../controllers/postsController");

const verifyToken = require("../middleware/verifyToken");

postsRouter.get("/", verifyToken, getPosts);
postsRouter.get("/published", getPublishedPosts);
postsRouter.get("/:id", getPost);
postsRouter.post("/", verifyToken, addPost);
postsRouter.delete("/:id", verifyToken, deletePost);
postsRouter.put("/:id", verifyToken, editPost);

module.exports = postsRouter;
