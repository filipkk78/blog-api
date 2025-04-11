const { Router } = require("express");
const commentsRouter = Router();
const {
  getComments,
  addComment,
} = require("../controllers/commentsController");

commentsRouter.get("/", getComments);
commentsRouter.post("/", addComment);

module.exports = commentsRouter;
