import { sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { authRepository } from "../repostitories/userService";
dotenv.config();

const authRepo = new authRepository();

const JWT_SECRET = process.env.JWT_SECRET;

//CREATING JWT ACCESS TOKEN
export const createAccessToken = (userId: any) => {
  const accessToken = sign({ userId }, JWT_SECRET as string, {
    expiresIn: "1d",
  });
 
  
  return accessToken;
};

//CREATING JWT REFRESH TOKEN
export const createRefreshToken = (userId: any) => {
  const refreshToken = sign({ userId }, JWT_SECRET as string, {
    expiresIn: "1d",
  });
  return refreshToken;
};

// middleware function to verify access token
export const verifyJwtToken = async (
  req: Request,
  res: Response,
  next: any
) => {
  
  const accessToken = req.headers["authorization"]?.split(" ")[1];
  console.log(accessToken);

  if (accessToken) {
    try {
      verify(
        accessToken,
        process.env.JWT_SECRET as string,
        (err: any, data: any) => {
          if (err) {
            res.status(403).send({ msg: "Forbidden" });
          } else {
            next();
          }
        }
      );
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
};

export const createNewAccessToken = async (data: string) => {
  if (!data) return "RefreshToken not found";

  try {
    const isValidToken: any = verify(data, process.env.JWT_SECRET as string);

    const user = await authRepo.findUserById(isValidToken.user);
    if (!user) return "Unauthorized";
    const id: string = user?._id.toString();
    return sign({ id }, process.env.JWT_SECRET as string, {
      expiresIn: "15m",
    });
  } catch (err) {
    throw { err };
  }
};

// const checkUser = (req:Request,res:Response,next:NextFunction) => {
//     const token = req.cookies.accessToken;
//     console.log(token);
//     if(token){
//         verify(token,JWT_SECRET as string ,async(err:any,decodedToken:any)=>{
//             if(err){
//                 console.log(err);
//                 res.json({status:false, err:err})
//             }else{
//                 console.log(decodedToken.id,"===============");
//                 const user = await userModel.findById(decodedToken.id);
//                 console.log("=============")
//                 console.log(user);
//                 console.log("=============")
//                 if(user) res.json({status: true, user: user})
//                 else res.json({status: false});
//             }
//         })
//     }else{
//         res.json({status:false});
//     }
// }

// export default checkUser
