const { Router } = require("express");
const userRouter = Router();
const { getUsers } = require("../controllers/userController");

userRouter.get("/", getUsers);

module.exports = userRouter;
