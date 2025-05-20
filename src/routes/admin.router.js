import { Router } from "express";
import { LoginPage } from "../controllers/admin.controller.js";

const router = Router()

router.route("/login").get(LoginPage)
router.route("/login").post(LoginPage)

export default router