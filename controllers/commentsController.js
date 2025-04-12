const db = require("../prisma/queries");

async function getComments(req, res) {
  res.json({ comments: await db.getComments() });
}

async function getComment(req, res) {
  const comment = await db.getCommentById(Number(req.params.id));
  if (!comment) {
    res.status(404).json({
      error: "Comment not found",
    });
  }
  res.json({
    comment,
  });
}

async function addComment(req, res) {
  await db.addComment(
    req.body.content,
    Number(req.body.authorId),
    Number(req.body.postId)
  );
  res.json({
    message: `Added comment with content ${req.body.content} on post id ${req.body.postId}, author id ${req.body.authorId}`,
  });
}

async function deleteComment(req, res) {
  const message = await db.deleteComment(Number(req.params.id));
  if (!message) {
    return res.status(404).json({
      error: "Comment not found",
    });
  }
  res.json({
    message,
  });
}

module.exports = {
  getComments,
  getComment,
  addComment,
  deleteComment,
};
