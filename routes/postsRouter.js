const { Router } = require("express");
const postsRouter = Router();
const { getPosts } = require("../controllers/postsController");

postsRouter.get("/", getPosts);

module.exports = postsRouter;
