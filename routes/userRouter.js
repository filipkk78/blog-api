const { Router } = require("express");
const userRouter = Router();
const {
  getUsers,
  addUser,
  deleteUser,
} = require("../controllers/userController");

userRouter.get("/", getUsers);
userRouter.post("/", addUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
