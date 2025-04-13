const { Router } = require("express");
const userRouter = Router();
const {
  addUser,
  deleteUser,
  getUsers,
} = require("../controllers/userController");

const verifyToken = require("../middleware/verifyToken");

userRouter.get("/", getUsers);
userRouter.post("/", addUser);
userRouter.delete("/:id", verifyToken, deleteUser);

module.exports = userRouter;
