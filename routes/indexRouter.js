const { Router } = require("express");
const indexRouter = Router();
const commentsRouter = require("./commentsRouter");
const postsRouter = require("./postsRouter");

indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.use("/comments", commentsRouter);
indexRouter.use("/posts", postsRouter);

module.exports = indexRouter;
