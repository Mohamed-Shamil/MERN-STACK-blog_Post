import axiosConfig from "../Config/axiosAuth";

const authAPI = () => {
  const doSignup = async (signupData) => {
    try {
      const response = await axiosConfig.post("/signup", signupData);
      return response;
    } catch (err) {
      throw { msg: err.response.data.message };
    }
  };

  const verifyUser = async (loginData) => {
    try {
      const response = await axiosConfig.post("/login", loginData);
      return response;
    } catch (err) {
      throw { msg: err.response.data.message };
    }
  };

  const addPost = async (blogData) => {
    try{
        const response = await axiosConfig.post('/createPost',blogData)
        return response

    }catch( err ) {
        throw {msg:err.response.message, err}
    }
  } 

  const getUserId = async () => {
    try {
      const response = await axiosConfig.post('/getUser',)
      return response
    }
    catch(error) {
      throw {msg:error.message, error}
    }
  }

  const createPost = async (post) => {
    try{
      const resposne = await axiosConfig.post('/createPost',post)
      return resposne
    }catch(err){
      throw { msg:err.message, err}
    }
  }
  
  const getPost = async () => {
    try{
      const response = await axiosConfig.get('/getPost')
      return response
    }catch(err){
      throw{msg:err.message, err}
    }
  }

  return { doSignup, verifyUser, addPost, getUserId,createPost, getPost };
};

export default authAPI;
