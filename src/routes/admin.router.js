import { Router } from "express";
import { LoginPage,Dashboard,Logout,UserList, updateUser, deleteUser } from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { deletePost, PostList, updatePost } from "../controllers/post.controller.js";

const router = Router()

router.route("/login").get(LoginPage)
router.route("/login").post(LoginPage)
router.route("/dashboard").get(Dashboard)
router.route("/signout").get(adminMiddleware,Logout)
router.route("/users").get(adminMiddleware,UserList)
router.route("/update-user").post(adminMiddleware,updateUser)
router.route("/delete-user").post(adminMiddleware,deleteUser)

router.route("/posts").get(adminMiddleware,PostList)
router.route("/update-post").post(adminMiddleware,deletePost)

export default router