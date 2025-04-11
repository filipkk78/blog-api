const { Router } = require("express");
const userRouter = Router();
const { getUsers, addUser } = require("../controllers/userController");

userRouter.get("/", getUsers);
userRouter.post("/", addUser);

module.exports = userRouter;
