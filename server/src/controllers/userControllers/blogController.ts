import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { BlogHelpers } from "../../helpers/blogHelper";
import { imageUpload } from "../../multer/multer";
import { post, getOneImage } from "../../config/s3";
import { userModel } from "../../model/userModel/user";

//HELPER
const BlogHelper = new BlogHelpers();

const {
  createPost,
  getAllPosts,
  getBlog,
  likeHelper,
  followHelper,
  UserPostHelper,
  deletePostHelper,
  getCommentHelper,
  postCommentHelper,
  followingListHelper,
  followersListHelper
} = BlogHelper;

export const createBlog = asyncHandler(async (req: Request, res: Response) => {
  try {
    const uploadHandler = await imageUpload(req as any, res);

    const imageName = await uploadHandler(req as any, res);
    const post = {
      authorId: req.body.autherId,
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
      image: imageName,
    };

    const response = await createPost(post);

    res.send(response);
  } catch (error) {
    throw { error };
  }
});

export const getPost = asyncHandler(async (req: Request, res: Response) => {
  try {
    const response = await getAllPosts();

    const postPromise = await post(response);
    
    const updatedPost = await Promise.all(postPromise);
    console.log(updatedPost);

    res.status(200).json(updatedPost);
  } catch (err) {
    throw { err };
  }
});

export const getOneBlog = asyncHandler(async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const response = await getBlog(postId);
    const updatedPost = await getOneImage(response);
    res.status(200).json(updatedPost);
  } catch (err) {
    throw { err };
  }
});

export const likeBlog = asyncHandler(async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await likeHelper(postId);

    const likePost = post?.likes.find((id) => id == userId);
    if (!likePost) {
      post?.likes.push(userId);
    } else {
      if (post && post.likes) {
        post.likes = post.likes.filter((id: string) => id !== userId);
      }
    }
    post?.save();
    res.status(200).json(post);
  } catch (err) {
    throw { err };
  }
});

export const followUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const myId = req.params.myId;

    if (myId !== userId) {
      const user = await userModel.findById(userId);

      const currentUser = await userModel.findById(myId);

      if (user && currentUser) {
        if (!user.followers.includes(myId)) {
          user.followers.push(myId);
          await user.save();

          currentUser.following.push(userId);
          await currentUser.save();

          res.status(200).send(user);
        } else {
          res.status(401).send("You Already Follow this User");
        }
      } else {
        res.send("User or Current User not found");
      }
    } else {
      res.send("You Can't Follow Yourself");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

export const unFollowUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const myId: string = req.params.myId;

    if (userId !== myId) {
      const user = await userModel.findById(userId);
      const currentUser = await userModel.findById(myId);

      if (user && currentUser) {
        const followersArray = user.followers as unknown as Document[]; // Convert to JavaScript array
        const updatedFollowers = followersArray.filter(
          (follower) => follower.toString() !== myId
        );

        user.followers = updatedFollowers;
        await user.save();

        const followingArray = currentUser.following as unknown as Document[];
        const updatedFollowing = followingArray.filter(
          (following) => following.toString() !== userId
        );

        currentUser.following = updatedFollowing;
        await currentUser.save();

        return res.status(200).send(user);
      } else {
        return res.status(404).send("User not found");
      }
    } else {
      return res.status(403).send("You cannot unfollow yourself");
    }
  } catch (err) {
    throw { err };
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const posts = await UserPostHelper(userId);
    
    const postPromise = await post(posts);
    
    const updatedPost = await Promise.all(postPromise);

    res.send(updatedPost);
  } catch (error) {
    throw { error };
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const response = await deletePostHelper(postId);
    return res.status(200).json({ response });
  } catch (err) {
    throw { err };
  }
};

export const commentBlog = async (req:Request, res: Response) => {
  try{
    const postId = req.params.postId;
  
    
    const response = await getCommentHelper(postId)
    res.json(response)
  }catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}


export const postComment = async (req:Request, res: Response) => {
  try {
    
    const postId = req.params.postId;
    const comments = req.body;

    const response = await postCommentHelper(postId,comments)
    
    res.status(201).json(response);
  } catch (error) {
    console.error('Error submitting comment:', error);
    res.status(500).json({ error: 'Failed to submit comment' });
  }
};

export const followingUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id

    const following = await followingListHelper(userId)
    console.log(following,"225 blogControllers");
    
    
    res.status(200).json(following)
  } catch (err) {
    throw err
  }
}

export const myFollowers = async (req:Request , res: Response) => {
  try{
    
    const userId = req.params.id

    const followers = await followersListHelper(userId)
    res.status(200).json(followers)
    
  }catch (err) {
    throw err
  }
}