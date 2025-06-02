import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const LoginPage = asyncHandler(async (req,res) => {

    if(req.method === 'POST'){
        
        //login with email or name with password
        const {email,username,password} = req.body

            if(!username && !email){
                res.render("admin/auth/login", {
                    errorMessage: "username or email is required."
                });
            }
        
            const user = await User.findOne({

                $and: [
                    { user_type: 'admin' },
                    {
                      $or: [{ username },{ email }]
                    }
                  ]
            })

            //### findOne ye sab User modal k pass hai but jo custom method hai jaise isPasswrdCorret ye user k pass jai
            if(!user){
                res.render("admin/auth/login", {
                    errorMessage: "user does not exist."
                });
            }

            const isPassValid = await user.isPasswordCorrect(password) //paasword req.body vaala upar

            if(!isPassValid){
                res.render("admin/auth/login", {
                    errorMessage: "Password Incorrect."
                });
            }
            
            req.session.userId = user._id;
            req.session.user = user;//set user details in session so that we can access the value of user anywhere
            res.redirect('/admin/dashboard');
            return

    }

    res.render('admin/auth/login');
})

const Dashboard = asyncHandler(async (req,res) => {
    res.render('admin/dashboard');
})


const Logout = asyncHandler(async(req,res) => {
    req.session.destroy((err) => {
        if (err) {
          return res.redirect('/admin/dashboard');
        }
        res.redirect('/admin/login');
    });
})

const UserList = asyncHandler(async(req,res) => {
    try{

        const UserList = await User.find(
            { 
                user_type: 'user',
                is_deleted: 0,

            });
        res.render('admin/users/list', { users: UserList });


    }catch(error){
        res.render("admin/users/list", {
            errorMessage: error
        });
    }
})

const updateUser = asyncHandler(async(req,res) => {

    try{

        const {user_id,firstName,lastName,email,verify} = req.body

        const updateQuery = await User.findByIdAndUpdate(
            user_id,
            {
                //jo field hme set karna hai
                $set:{
                    firstName:firstName,
                    lastName,lastName,
                    email:email,
                    verify:verify
                }
            },
            {new:true}//return updated document
        )

        if (updateQuery) {
            res.json({
                message: "updated",
                status:true
            });
        } else {
            res.json({
                message: "something wrong.",
                status:false
            });
        }

    }catch(error){
        res.render("admin/users/list", {
            errorMessage: error
        });
    }

})

const deleteUser = asyncHandler(async(req,res) => {

    try{

        const {id} = req.body
        
        const updateQuery = await User.findByIdAndUpdate(
            id,
            {
                //jo field hme set karna hai
                $set:{
                    is_deleted:true,
                }
            },
            {new:true}//return updated document
        )

        if (updateQuery) {
            res.json({
                message: "deleted",
                status:true
            });
        } else {
            res.json({
                message: "something wrong.",
                status:false
            });
        }

    }catch(error){
        res.json({
            message: "sddsd",
            status:false
        });
    }

})

export {LoginPage,Dashboard,Logout,UserList,updateUser,deleteUser}