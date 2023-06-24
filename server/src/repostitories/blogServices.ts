import { Response } from "express";
import mongoose from "mongoose";
import { postModel } from "../model/postModel/postModel";
import { userModel } from "../model/userModel/user";
import { commentModel } from "../model/postModel/commentModel";

export class blogRepository {
  async postCreate(postDetails: any) {
    try {
      const post = await postModel.create(postDetails);
      return post;
    } catch (err) {}
  }

  async getPostsFromDb() {
    try {
      const posts = await postModel
        .aggregate([
          {
            $addFields: {
              authorId: {
                $convert: {
                  input: "$authorId",
                  to: "objectId",
                  onError: null,
                  onNull: null,
                },
              },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "authorId",
              foreignField: "_id",
              as: "authorDetails",
            },
          },
          {
            $unwind: {
              path: "$authorDetails",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $unwind: {
              path: "$authorDetails",
              preserveNullAndEmptyArrays: true,
              includeArrayIndex: "authorIndex",
            },
          },
          {
            $project: {
              _id: 1,
              title: 1,
              content: 1,
              subTitle: 1,
              image: 1,
              createdAt: 1,
              author: "$authorDetails.name",
              authorImage: "$authorDetails.image",
            },
          },
        ])
        .sort({ createdAt: -1 });
      return posts;
    } catch (error) {
      throw { error };
    }
  }

  async getPost(postId: any) {
    try {
      const post = await postModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(postId),
          },
        },
        {
          $addFields: {
            authorId: {
              $convert: {
                input: "$authorId",
                to: "objectId",
                onError: null,
                onNull: null,
              },
            },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "authorDetails",
          },
        },
        {
          $unwind: {
            path: "$authorDetails",
            preserveNullAndEmptyArrays: true,
            includeArrayIndex: "authorIndex",
          },
        },
        {
          $project: {
            _id: 1,
            authorId: 1,
            title: 1,
            subTitle: 1,
            content: 1,
            image: 1,
            createdAt: 1,
            likes: 1,
            author: "$authorDetails.name",
          },
        },
      ]);

      return post;
    } catch (error) {
      throw { error };
    }
  }

  async likePost(postId: string) {
    try {
      const post = await postModel.findById(postId);
      return post;
    } catch (err) {
      throw { err };
    }
  }

  async followUser(userId: string, myId: string) {
    try {
      const follow = await userModel.findById(userId);

      const following = await postModel.findById(myId);
    } catch (error) {
      throw { error };
    }
  }

  async userPostService(userId: string) {
    try {
      const posts = await postModel
        .find({ authorId: userId })
        .sort({ createdAt: -1 });

      return posts;
    } catch (error) {
      throw { error };
    }
  }

  async postFromDb(postId: string) {
    try {
      const post = await postModel.findById({ _id: postId });

      return post;
    } catch (err) {
      throw { err };
    }
  }

  async deletePostFromDb(postId: string) {
    try {
      const response = await postModel.findByIdAndDelete({ _id: postId });
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async getCommentFromDb(postId: string) {
    try {
      const comments = await commentModel.find({ postId });

      return comments;
    } catch (error) {
      throw error;
    }
  }

  async saveCommentOnDb(postId: any, comment: any) {
    try {
      const { content, author } = comment;

      const user = await userModel.findById(author);

      if (!user) {
        throw new Error("User not found");
      }

      const commenter = user.name;

      const newComment = new commentModel({
        postId,
        content,
        author,
        commenter,
      });
      const savedComment = await newComment.save();

      return savedComment;
    } catch (error) {
      console.error("Error saving comment:", error);
      throw error;
    }
  }
  async getFollowing(userId: string) {
    try {
     
      const following = await userModel.findById(userId);
      const myFollowingIds = following?.following;

      const names = await Promise.all(
        myFollowingIds?.map(async (id) => {
          const following = await userModel.findById(id);
          return {
            name: following?.name,
            id: following?._id,
          };

        }) || []
      );


      return names;
    } catch (err) {
      throw { err };
    }
  }
  async getFollowers (userId: string) {
    try{
      const follower = await userModel.findById(userId)
      const myFollowersIds = follower?.followers
      const names = await Promise.all(
      myFollowersIds?.map(async (id) => {
        const followers = await userModel.findById(id);
        return {
          name:followers?.name,
          id:followers?._id
        }
      }) || []
      )
     
      
      return names

    }catch (err) {
      throw { err };
    }
  }
}
