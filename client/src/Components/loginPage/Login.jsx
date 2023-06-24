// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'

//REDUX
import { useDispatch,useSelector } from "react-redux";
import { userReducer } from "../../redux/Slices/userSlice";
import { setDetails } from "../../redux/Slices/userSlice";

//TOASTIFY NOTIFICATION
import { ToastContainer } from "react-toastify";
import toastifyNotifications from "../../Config/toastifyConfig";

//IMPORT VALIDATION
import UserLoginValidation from "../../hooks/loginValidation";

//AUTH API
import authAPI from "../../Api/authApi";

//FIREBASE CONFIG
import {auth, provider} from '../../Config/firebase'
import {signInWithPopup} from 'firebase/auth'


function LoginPage() {

  const {token} = useSelector(userReducer)
  
  

useEffect(()=>{
  if(token){
    navigate('/home')
  }
},[])
  
  const { invalidCredToast, invalidLogin } = toastifyNotifications();
  const { handleInputs, isValidForm, loginForm, errors } =
    UserLoginValidation();
  const { verifyUser,emailLogin } = authAPI();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validForm = await isValidForm(e);
    if (!validForm) {
      invalidCredToast();
      return;
    }
    try {
      const emailVerifyResponse = await verifyUser(loginForm);
      

      const { userId, name, email, accessToken } = emailVerifyResponse.data;
      

      dispatch(setDetails({ id: userId, name, email, accessToken }));

      navigate("/home");
    } catch (error) {
      invalidLogin();
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const mail = data.user.email;
      const response = await emailLogin(mail);
      const { userId, name, email, accessToken } = response;
      dispatch(setDetails({ id: userId, name, email, accessToken }));
      navigate("/home");
    } catch (error) {
      console.error(error);
      invalidLogin();
    }
  };
  

  return (

    <>
      <ToastContainer />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white shadow-xl rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
            
            <div className="flex justify-center">  <GoogleButton type="light" onClick={handleGoogleLogin}/></div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleInputs}
                    value={loginForm.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  <p className="text-red-500 text-sm font-size: 0.75rem">
                    {errors.email}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleInputs}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-red-500 text-sm font-size: 0.75rem">
                    {errors.password}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <a
                    onClick={() => navigate("/signup")}
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
