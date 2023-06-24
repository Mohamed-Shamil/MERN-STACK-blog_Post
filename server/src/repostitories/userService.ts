import  {postModel}  from "../model/postModel/postModel";
import { userModel } from "../model/userModel/user";

export class authRepository {
  //Checking Existing User Or Not
  async findUserByEmailAndPhone(identifier: any) {
    try {
      return await userModel.findOne({
        $or: [{ email: identifier.email }, { phone: identifier.phone }],
      });
    } catch (err) {
      throw "reg Error" + err;
    }
  }
  // REGISTER
  async registerUser(regDetails: any) {
    try {
      let { name, email, phone, password } = regDetails;
      let userRegisteredAlready = await userModel.find({ email: email });
      if (userRegisteredAlready.length != 0) {
        throw { msg: "User is Already Registered" };
      }

      return await userModel.create({
        name,
        email,
        phone,
        password,
      });
    } catch (error) {
      throw ["User Cannot be registered", error];
    }
  }

  async loginUser(loginDetails: string) {
    try {
      return await userModel.findOne({ email: loginDetails });
    } catch (error) {
      throw { error };
    }
  }

  async emailLoginService (email:string) {
    try{
const user = await userModel.findOne({email:email})

if(user){
  return user
}else{
  throw { msg: "Invalid Email" };
}
    }catch(err){
      throw{err}
    }
  }

  async findUserById (id: string) {
    try{
      const user :any = await userModel.findById({_id: id});
  
      return user
    } catch(err:any) {
      if(err.kind == "ObjectId") {
        throw {err: {msg: "Invalid Link"}}
  
      }else{
        throw{err}
      }
    }
  } 

  async userDetails (userId:string) {
try {
  const user :any = await userModel.findById({_id: userId});


  return user
} catch (error) {
  throw{error}
}
  }

  async updateUser(userData:any) {
    try {
      const update = {
        name: userData.name,
        bio: userData.bio,
        image: userData.image,
      };
      
      const userId = userData.userId
      const response = await userModel.findByIdAndUpdate(userId, update, { new: true });
  
      return response
      
    } catch (error) {
      throw{error}
    }
  }

}
