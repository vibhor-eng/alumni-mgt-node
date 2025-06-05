import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({

    userId:{
        type:String,
        default: null
    },
    description:{
        type:String,
        default: null
    },
    imageUrl:{
        type:String,
        default: null
    },
    name:{
        type:String,
        requiured:true,
        trim:true,
        default: null
    },
    likes:{
        type:Number,
        default: null
    },
    comments:{
        type:[],
        default: null
    },
    share:{
        type:Number,
        default: null
    },
    is_hidden:{
        type:Boolean,
        default: false
    },
    postedTime:{
        type: Date,
        default: Date.now
    },
    deleted_at:{
        type:Date,
        default: null
    },
    
    is_deleted:{
        type:Number,
        default: 0
    },


},{timestamps:true})

export const Post = mongoose.model("Post",postSchema)