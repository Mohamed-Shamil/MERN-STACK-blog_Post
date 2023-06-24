import mongoose, { Types } from "mongoose";

const postSchema = new mongoose.Schema({
    authorId: {
        type: String,
        require:true,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required:true
    }
    ,
    title:{
        type: String,
        required: true
    },
    subTitle:{
        type:String,
        required:true
    },
    likes:[
        {
        type:String
        ,ref:"User"
    }], 
},{
    timestamps:true
})

export type typeOfPostSchema = typeof postModel;

export const postModel = mongoose.model("post",postSchema)