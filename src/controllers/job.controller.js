import { asyncHandler } from "../utils/asyncHandler.js";
import { Job } from "../models/job.model.js";

const jobList = asyncHandler(async(req,res) => {

    try{

        const jobList = await Job.find({
            'is_deleted': '0'
        })

        res.render('admin/jobs/list', { jobs: jobList });//to load view file

    }catch(error){
        res.render("admin/jobs/list", {
            errorMessage: error
        });
    }

})

const createJob = asyncHandler(async(req,res) => {



})

const updateJob = asyncHandler(async(req,res) => {

    try{

        const {designation,company,job_link,due_date,job_id} = req.body

        const updateJob = await Job.findByIdAndUpdate(
            job_id,
            {
                //jo field hme set karna hai
                $set:{
                    designation:designation,
                    company:company,
                    job_link:job_link,
                    due_date:due_date,
                    
                }
            },
            {new:true}//return updated document
        )

        if (updateJob) {
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
        res.json({  
            message: "something went wrong.",
            status:false
        });
    }

})

const deleteJob = asyncHandler(async(req,res) => {

    try{
    
            const {id} = req.body
            
            const deleteJob = await Job.findByIdAndUpdate(
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
    
            if (deleteJob) {
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

export {jobList,createJob,updateJob,deleteJob}