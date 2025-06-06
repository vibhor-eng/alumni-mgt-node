import mongoose, {mongo, Schema} from "mongoose";

const jobSchema = new Schema({

    designation:{
        type:String,
        default:null
    },
    company:{
        type:String,
        default:null
    },
    job_link:{
        type:String,
        default:null
    },
    due_date:{
        type:Date,
        default:null
    },
    status:{
        type:Number,
        default:1
    },
    is_deleted:{
        type:Number,
        default:0
    }


},{timestamps:true})

export const Job = mongoose.model("Job",jobSchema)