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

  async postCreate(postDetails:any) {
    console.log(postDetails, "uuuuuuuuuu");
    
    try{
      const post =   await postModel.create(postDetails)
      console.log(post, "thish is the post we created");
      
    }
    catch(err){

    }
  }


  async getPostsFromDb( ){
    try {
      const posts = await postModel.find()
      console.log(posts);
      
      
      return posts
    } catch (error) {
      throw{error}
    }
  }

}
