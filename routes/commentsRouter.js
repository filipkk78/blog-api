const { Router } = require("express");
const commentsRouter = Router();
const {
  getComments,
  getComment,
  addComment,
  deleteComment,
  editComment,
} = require("../controllers/commentsController");

const verifyToken = require("../middleware/verifyToken");

commentsRouter.get("/", getComments);
commentsRouter.get("/:id", getComment);
commentsRouter.post("/", addComment);
commentsRouter.delete("/:id", verifyToken, deleteComment);
commentsRouter.put("/:id", verifyToken, editComment);

module.exports = commentsRouter;
