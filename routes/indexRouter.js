const { Router } = require("express");
const indexRouter = Router();
const commentsRouter = require("./commentsRouter");
const postsRouter = require("./postsRouter");
const usersRouter = require("./userRouter");
const jwt = require("jsonwebtoken");
require("dotenv").config();

indexRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the api" });
});

indexRouter.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "Gyro",
    email: "gyro@zeppeli.com",
  };

  jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
    (err, token) => {
      res.json({
        token,
      });
    }
  );
});

indexRouter.use("/comments", commentsRouter);
indexRouter.use("/posts", postsRouter);
indexRouter.use("/users", usersRouter);

indexRouter.post("/jwttest", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Access granted", authData });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({ error: "Access denied" });
  }
}

module.exports = indexRouter;
