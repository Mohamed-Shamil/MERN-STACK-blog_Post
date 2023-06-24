import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },commenter:{
    type:String,
    required:true
  },
  author: {
    type: String,
    required: true,
  },
 
},{
    timestamps:true
});


export type typeOfCommentSchema = typeof commentModel;

export const commentModel = mongoose.model("Comment", commentSchema);
