import { compare, hash } from "bcrypt";
import { authRepository } from "../repostitories/userService";

//USER REPOSITORY
const authRepo = new authRepository();

const { registerUser, findUserByEmailAndPhone, loginUser,postCreate, getPostsFromDb } = authRepo;

export class userAuthHelpers {
  //User Registration
  async doSignUp(regDetails: any) {
    try {
      if (regDetails.password && regDetails.email && regDetails.phone) {
        //Checking whether existing user or not
        const response = await findUserByEmailAndPhone(regDetails);

        if (!response) {
          regDetails.password = await hash(regDetails.password, 10);
          const data = await registerUser(regDetails);
          console.log(regDetails, "userAuthHelper line 31");

          return {
            email: data.email,
            _id: data._id,
            name: data.name,
          };
        } else {
          throw new Error("User Already Exists");
        }
      } else throw new Error("Require Every Fields");
    } catch (error: object | any) {
      const EmptyError: string | any = error.message;
      if (EmptyError) throw EmptyError;
      if (error?.error?.code === 11000) {
        const value = Object.keys(error.error.keyValue)[0];
        throw { error, message: `${value} already exist` };
      } else if (error?.error?.message) {
        throw { error, message: error.error.message };
      } else throw { error };
    }
  }

  //User Login
  async doLogin(loginDetails: any) {
    console.log(loginDetails, " userAuthHelper 62");

    try {
      const credentials = loginDetails.email;
      if (credentials && loginDetails.password) {
        const response = await loginUser(credentials);

        console.log(response, "userauthhelper 69");

        if (response && response.password) {
          const auth = await compare(loginDetails.password, response.password);
          console.log(auth, "userAuthhealper 69");
          if (auth) {
            return {
              email: response.email,
              _id: response._id,
              name: response.name,
            };
          } else {
            throw { msg: "Incorrect Password" };
          }
        } else throw { msg: "User not Found" };
      } else throw { msg: "Every field is required" };
    } catch (error: object | any) {
      const EmptyError = error.message;
      if (EmptyError) throw EmptyError;
      else throw error;
    }
  }

  //Post Creation
  async createPost(postData:any) {
    console.log(postData, "hiiiiiiiiiiiiiiii")

    try{
      const data = postData
      
        const response = postCreate(data)
        return response
      

    }
    catch(err){
      throw{err}
    }
  }


  //Finding Posts
  async getAllPosts() {
    try {
      const posts = getPostsFromDb()
      return posts
    } catch (error) {
      throw{error}
    }
  }
}
