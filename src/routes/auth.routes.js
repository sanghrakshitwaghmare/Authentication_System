import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"


const authRouter = Router();


authRouter.post("/register", authController.register)
authRouter.get("/getMe", authController.getMe)
authRouter.get("/refreshToken",authController.refreshToken)

//GET /api/auth//logout
authRouter.get("/logout",authController.logout)

// GET  /api/auth/logoutAll
authRouter.get("/logoutAll", authController.logoutAll)

//POST /api/auth/login
authRouter.post("/login",authController.login)


export default authRouter;
