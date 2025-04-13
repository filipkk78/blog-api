const { Router } = require("express");
const postsRouter = Router();
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  editPost,
} = require("../controllers/postsController");

const verifyToken = require("../middleware/verifyToken");

postsRouter.get("/", getPosts);
postsRouter.get("/:id", getPost);
postsRouter.post("/", addPost);
postsRouter.delete("/:id", verifyToken, deletePost);
postsRouter.put("/:id", verifyToken, editPost);

module.exports = postsRouter;
