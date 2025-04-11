const { Router } = require("express");
const commentsRouter = Router();
const { getComments } = require("../controllers/commentsController");

commentsRouter.get("/", getComments);

module.exports = commentsRouter;
