import { Response } from "express";
import { blogRepository } from "../repostitories/blogServices";
import { deletePost } from "../config/s3";

//USER REPOSITORY
const blogRepo = new blogRepository();

const {
  postCreate,
  getPostsFromDb,
  getPost,
  likePost,
  followUser,
  userPostService,
  deletePostFromDb,
  postFromDb,
  getCommentFromDb,
  saveCommentOnDb,
  getFollowing,
  getFollowers
} = blogRepo;

export class BlogHelpers {
  //Post Creation
  async createPost(postData: any) {
    try {
      const response = postCreate(postData);
      return response;
    } catch (err) {
      throw { err };
    }
  }

  //Finding Posts
  async getAllPosts() {
    try {
      const posts = await getPostsFromDb();
      return posts;
    } catch (error) {
      throw { error };
    }
  }

  //Full Blog
  async getBlog(postId: any) {
    try {
      const post = await getPost(postId);
      return post;
    } catch (err) {
      throw { err };
    }
  }

  async likeHelper(postId: any) {
    try {
      const post = await likePost(postId);
      return post;
    } catch (err) {
      throw { err };
    }
  }

  async followHelper(userId: any, myId: any) {
    try {
      const follow = await followUser(userId, myId);
      return follow;
    } catch (err) {
      throw { err };
    }
  }

  async UserPostHelper(userId: string) {
    try {
      const post = userPostService(userId);
      return post;
    } catch (err) {
      throw { err };
    }
  }

  async deletePostHelper(postId: string) {
    try {
      const post = await postFromDb(postId);

      const postPromise = await deletePost(post);

      if (postPromise) {
        const response = await deletePostFromDb(postId);
        return response;
      }
    } catch (err) {
      throw { err };
    }
  }
  async getCommentHelper (postId:string){
    try {
      const comment = getCommentFromDb(postId)
      return comment
    } catch (error) {
      throw{error}
    }
  }

  async postCommentHelper (postId:any,comment:any){
    try{
      const comments = await saveCommentOnDb(postId,comment)
      return comments
    }catch(err){
      throw{err}
    }
  }

  async followingListHelper (userId:string) {
    try{
      const following = await getFollowing(userId)
      return following
    }
    catch(err){
      throw{err}
    }
  }

  async followersListHelper(userId: string) {
    try{
      const followers = await getFollowers(userId)
      return followers
    }catch(err){
      throw{err}
    }
  }
}
