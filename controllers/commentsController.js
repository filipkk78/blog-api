const db = require("../prisma/queries");

async function getComments(req, res) {
  res.json({ comments: await db.getComments() });
}

async function getComment(req, res) {
  res.json({
    comment: await db.getCommentById(Number(req.params.id)),
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
  await db.deleteComment(Number(req.params.id));
  res.json({
    message: `deleted comment of id ${req.params.id}`,
  });
}

module.exports = {
  getComments,
  getComment,
  addComment,
  deleteComment,
};
