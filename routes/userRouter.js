const { Router } = require("express");
const userRouter = Router();
const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
} = require("../controllers/userController");

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", addUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
