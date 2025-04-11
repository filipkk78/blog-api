const { Router } = require("express");
const postsRouter = Router();
const { getPosts, addPost } = require("../controllers/postsController");

postsRouter.get("/", getPosts);
postsRouter.post("/", addPost);

module.exports = postsRouter;
