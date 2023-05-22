import mongoose, { Types } from "mongoose";
import validator from "validator"; 

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        require:true,
    },
    content: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },

},{
    timestamps:true
})

export type typeOfPostSchema = typeof postModel;

export const postModel = mongoose.model("post",postSchema)