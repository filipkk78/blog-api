const { Router } = require("express");
const indexRouter = Router();
const commentsRouter = require("./commentsRouter");
const postsRouter = require("./postsRouter");
const usersRouter = require("./userRouter");

indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.use("/comments", commentsRouter);
indexRouter.use("/posts", postsRouter);
indexRouter.use("/users", usersRouter);

module.exports = indexRouter;
