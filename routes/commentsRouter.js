const { Router } = require("express");
const commentsRouter = Router();
const {
  getComments,
  getComment,
  addComment,
  deleteComment,
  editComment,
} = require("../controllers/commentsController");

commentsRouter.get("/", getComments);
commentsRouter.get("/:id", getComment);
commentsRouter.post("/", addComment);
commentsRouter.delete("/:id", deleteComment);
commentsRouter.put("/:id", editComment);

module.exports = commentsRouter;
