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

})

const deleteJob = asyncHandler(async(req,res) => {

})

export {jobList,createJob,updateJob,deleteJob}