import { asyncHandler } from "../utils/asyncHandler.js";
import { Post } from "../models/post.model.js";

const PostList = asyncHandler(async(req,res) => {

    try{
    
        const PostList = await Post.find(
            { 
                is_deleted: 0,
            });
        res.render('admin/posts/list', { posts: PostList });
    
    
        }catch(error){
            res.render("admin/posts/list", {
                errorMessage: error
            });
        }

})

const updatePost = asyncHandler(async(req,res) => {

    try{
    
            const {is_hidden,post_id} = req.body
    
            const updateQuery = await Post.findByIdAndUpdate(
                post_id,
                {
                    //jo field hme set karna hai
                    $set:{
                        is_hidden:is_hidden
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
            res.render("admin/posts/list", {
                errorMessage: error
            });
        }

})

const deletePost = asyncHandler(async(req,res) => {

    try{
    
            const {id} = req.body
            
            const updateQuery = await User.findByIdAndUpdate(
                id,
                {
                    //jo field hme set karna hai
                    $set:{
                        is_deleted:true,
                        deleted_at:Date.now()
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

export {PostList,updatePost,deletePost}