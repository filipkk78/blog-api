const { Router } = require("express");
const indexRouter = Router();
const commentsRouter = require("./commentsRouter");
const postsRouter = require("./postsRouter");
const usersRouter = require("./userRouter");
const jwt = require("jsonwebtoken");
const passport = require("../middleware/passportConfig");
require("dotenv").config();

indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    jwt.sign(
      { user: req.user },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        res.json({
          token,
        });
      }
    );
  }
);

indexRouter.use("/comments", commentsRouter);
indexRouter.use("/posts", postsRouter);
indexRouter.use("/users", usersRouter);

module.exports = indexRouter;
