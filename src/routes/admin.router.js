import { Router } from "express";
import { LoginPage,Dashboard } from "../controllers/admin.controller.js";

const router = Router()

router.route("/login").get(LoginPage)
router.route("/login").post(LoginPage)
router.route("/dashboard").get(Dashboard)

export default router