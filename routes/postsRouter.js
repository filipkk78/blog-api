const { Router } = require("express");
const postsRouter = Router();
const db = require("../prisma/queries");

postsRouter.get("/", (req, res) => {
  res.json({ posts: [] });
});

module.exports = postsRouter;
