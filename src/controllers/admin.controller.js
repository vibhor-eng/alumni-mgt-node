import { asyncHandler } from "../utils/asyncHandler.js";

const LoginPage = asyncHandler(async (req,res) => {
    res.render('admin/auth/login');
})


export {LoginPage}