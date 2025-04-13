const { Router } = require("express");
const userRouter = Router();
const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
} = require("../controllers/userController");

const verifyToken = require("../middleware/verifyToken");

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", addUser);
userRouter.delete("/:id", verifyToken, deleteUser);

module.exports = userRouter;
