const { Router } = require("express");
const postsRouter = Router();
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
} = require("../controllers/postsController");

postsRouter.get("/", getPosts);
postsRouter.get("/:id", getPost);
postsRouter.post("/", addPost);
postsRouter.delete("/:id", deletePost);

module.exports = postsRouter;
