import { Router } from "express";
import { LoginPage,Dashboard,Logout } from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = Router()

router.route("/login").get(LoginPage)
router.route("/login").post(LoginPage)
router.route("/dashboard").get(Dashboard)
router.route("/signout").get(adminMiddleware,Logout)

export default router