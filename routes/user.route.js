const { Router } = require("express");
const { login, signUp } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("", login);
userRouter.post("/signup", signUp);

module.exports = userRouter;
