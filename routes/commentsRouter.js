const { Router } = require("express");
const commentsRouter = Router();
const {
  getComments,
  getComment,
  addComment,
  deleteComment,
} = require("../controllers/commentsController");

commentsRouter.get("/", getComments);
commentsRouter.get("/:id", getComment);
commentsRouter.post("/", addComment);
commentsRouter.delete("/:id", deleteComment);

module.exports = commentsRouter;
