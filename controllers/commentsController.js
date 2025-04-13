const db = require("../prisma/queries");
const jwt = require("jsonwebtoken");

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
    req.body.authorName,
    Number(req.body.postId)
  );
  res.json({
    message: `Added comment with content ${req.body.content} on post id ${req.body.postId}, author name ${req.body.authorName}`,
  });
}

async function deleteComment(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
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
  });
}

async function editComment(req, res) {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      console.log(err);
      res.sendStatus(403);
    } else {
      const message = await db.editComment(
        req.body.content,
        Number(req.params.id)
      );
      if (!message) {
        return res.status(404).json({
          error: "Comment not found",
        });
      }
      res.json({
        message,
      });
    }
  });
}

module.exports = {
  getComments,
  getComment,
  addComment,
  deleteComment,
  editComment,
};
