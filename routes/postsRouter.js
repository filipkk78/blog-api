const { Router } = require("express");
const postsRouter = Router();
const {
  getPosts,
  addPost,
  deletePost,
} = require("../controllers/postsController");

postsRouter.get("/", getPosts);
postsRouter.post("/", addPost);
postsRouter.delete("/:id", deletePost);

module.exports = postsRouter;
