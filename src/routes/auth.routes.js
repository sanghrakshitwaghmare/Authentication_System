import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"


const authRouter = Router();


authRouter.post("/register", authController.register)
authRouter.get("/getMe", authController.getMe)
authRouter.get("/refreshToken",authController.refreshToken)

export default authRouter;
