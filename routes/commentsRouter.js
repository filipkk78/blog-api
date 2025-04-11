const { Router } = require("express");
const commentsRouter = Router();
const {
  getComments,
  addComment,
  deleteComment,
} = require("../controllers/commentsController");

commentsRouter.get("/", getComments);
commentsRouter.post("/", addComment);
commentsRouter.delete("/:id", deleteComment);

module.exports = commentsRouter;
