const router = require("express").Router;

// const { create } = require("domain");
const {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");
const { pathMiddleware } = require("../middlewares/pathMiddleware");

const userRouter = router();

userRouter.route("/", ).get(pathMiddleware, getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
