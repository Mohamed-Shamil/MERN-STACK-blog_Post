import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import dotenv from "dotenv";
import { createAccessToken, createRefreshToken } from "../../Auth/jwtAuth";
import { userAuthHelpers } from "../../helpers/userAuthHelper";
dotenv.config();

const authHelpers = new userAuthHelpers();

const { doSignUp, doLogin,createPost ,getAllPosts} = authHelpers;

//REGISTER USER
export const userSignup = asyncHandler(async (req: Request, res: Response) => {
  try {
    const response = await doSignUp(req.body);

    res.status(200).json({ UserCreated: true, mail: response });
  } catch (err) {
    res.status(401).json(err);
  }
});

export const userLogin = asyncHandler(async (req: Request, res: Response) => {
  try {
    
    const response = await doLogin(req.body);
    const userId = response._id.toString();
    console.log(userId);

    const accessToken = createAccessToken(userId);
    console.log(accessToken);

    const refreshToken: string = createRefreshToken(userId);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ accessToken, response, msg: "user Logined" });
  } catch (error) {
    console.log(error);
    res.status(409).json(error);
  }
});

export const createBlog = asyncHandler (async (req:Request, res:Response) => {
  try {
    const response = await createPost(req.body)
    return response
  } catch (error) {
    
  }
})

export const getPost = asyncHandler ( async (req:Request, res:Response) => {
  try{
     const response = await getAllPosts()
     res.status(200).json(response);
  }catch(err){
    throw{err}
  }
})