const { Router } = require("express");
const commentsRouter = Router();
const db = require("../prisma/queries");

commentsRouter.get("/", (req, res) => {
  res.json({ comments: [] });
});

module.exports = commentsRouter;
