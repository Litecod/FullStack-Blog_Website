import express from "express";
import {
  sendCode,
  verifyCode,
  registerUser,
  userLogin,
  authorRegister,
  authorLogin,
  listUser,
} from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/send-code", sendCode);
UserRouter.post("/verify-code", verifyCode);
UserRouter.post("/register", registerUser);
UserRouter.post("/login", userLogin);
UserRouter.post("/author-login", authorLogin);
UserRouter.post("/author-register", authorRegister);
UserRouter.get("/list", listUser)

export default UserRouter;
