import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import dotenv from "dotenv";
import { createAccessToken, createRefreshToken } from "../../Auth/jwtAuth";
import { userAuthHelpers } from "../../helpers/userAuthHelper";
import {createNewAccessToken} from '../../Auth/jwtAuth'
import { imageUpload } from "../../multer/multer";
import { getOneImage, getProfileImage } from "../../config/s3";
dotenv.config();

const authHelpers = new userAuthHelpers();

const { doSignUp, doLogin,userData, editProfileHelper, emailLoginHelper } = authHelpers;

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

                                  
    const accessToken = createAccessToken(userId);
    
    const refreshToken: string = createRefreshToken(userId);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    res.cookie("accessToken",accessToken,{
      httpOnly: true,
      secure: true
    })

    res.status(200).json({
      userId: userId,
      name: response.name,
      email: response.email,
      accessToken,
      msg: "user Logined",
    });
  } catch (error) {
    console.log(error);
    res.status(409).json(error);
  }
});

export const emailLogin = async (req:Request, res: Response) => {
  try {
    const mail = Object.keys(req.body)[0];
  
    const response = await emailLoginHelper(mail);
    const userId = response.id.toString();

                                  
    const accessToken = createAccessToken(userId);
    
    const refreshToken: string = createRefreshToken(userId);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    res.cookie("accessToken",accessToken,{
      httpOnly: true,
      secure: true
    })

    res.status(200).json({
      userId: userId,
      name: response.name,
      email: response.email,
      accessToken,
      msg: "user Logined",
    });
    

  } catch (err) {
    console.log(err);
    res.status(409).json(err);
  }
}

export const getNewAccessToken =  async (req:Request, res: Response) => {

  try {
    let newAccessToken = await createNewAccessToken(
      req.cookies.refreshToken
    )

    res.status(200).json({accessToken: newAccessToken})
  } catch (error) {
    
  }
}

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userDetails = await userData(userId);
   
    if(userDetails.image){
      const updatedUser = await getProfileImage(userDetails);
      res.send(updatedUser);
    }else{
      res.send(userDetails)
    }

    
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching the user profile" });
  }
};

export const editProfile = async (req: Request, res: Response) => {
  try {
    let response;

    if (!req.file) {
      const userDetails = {
        userId: req.body.userId,
        name: req.body.name,
        bio: req.body.bio,
      };

      response = await editProfileHelper(userDetails);
    } else {
      const uploadHandler = await imageUpload(req as any, res);
      const imageName = await uploadHandler(req as any, res);

      const userDetails = {
        userId: req.body.userId,
        name: req.body.name,
        bio: req.body.bio,
        image: imageName,
      };

      response = await editProfileHelper(userDetails);
    }

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


function typeOf(mail: string): any {
  throw new Error("Function not implemented.");
}

