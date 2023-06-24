// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

//TOASTIFY NOTIFICATIONS
import toastifyNotifications from "../../Config/toastifyConfig";
import { ToastContainer } from 'react-toastify';
const { RegSuccessToast, invalidRegToast, invalidCredToast } =
  toastifyNotifications();

//CUSTOM HOOK FOR VALIDATION
import UserSignupValidation from "../../hooks/signUpValidation";

//API
import authApi from "../../Api/authApi";
const { doSignup } = authApi();

function  SignUp() {
  const { errors, handleInputs, isValidForm, signForm } = UserSignupValidation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formStatus = isValidForm();
    
      if (!formStatus) {
        console.log(formStatus);
        invalidRegToast();
        return;
      }
      
     
      // Registration API Calling
      const signupResponse = await doSignup(signForm);
      if (signupResponse) console.log("success");
      RegSuccessToast();
      navigate("/login");
    } catch (error) {
     
      console.log(error);
      invalidCredToast(error);
    }
  };

  return (
    <>
     <ToastContainer />
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              BLOG POST
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Full Name"
                      onChange={handleInputs}
                      value={signForm.name}
                    />
                    <p className="text-red-500 text-sm font-size: 0.75rem">
                      {errors.name}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="tel"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      onChange={handleInputs}
                      value={signForm.email}
                    />
                    <p className="text-red-500 text-sm font-size: 0.75rem">
                      {errors.email}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="**********"
                      onChange={handleInputs}
                      value={signForm.phone}
                    />
                    <p className="text-red-500 text-sm font-size: 0.75rem">
                      {errors.phone}
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      onChange={handleInputs}
                      value={signForm.password}
                    />
                    <p className="text-red-500 text-sm font-size: 0.75rem">
                      {errors.password}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      name="confirmPassword"
                      id="confirm-password"
                      placeholder=""
                      onChange={handleInputs}
                      value={signForm.confirmPassword}
                    />
                    <p className="text-red-500 text-sm font-size: 0.75rem">
                      {errors.confirmPassword}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-blue bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-black-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={()=> navigate('/login')}
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;
