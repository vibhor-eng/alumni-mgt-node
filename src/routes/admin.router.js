import { Router } from "express";
import { LoginPage } from "../controllers/admin.controller.js";

const router = Router()

router.route("/login").get(LoginPage)

export default router