// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userReducer } from "../../redux/Slices/userSlice";
import authAPI from "../../Api/authApi";
const { userProfile } = authAPI();

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const userDetails = useSelector(userReducer);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userProfile(userDetails.id);
      setImage(userData?.image);
    };
    fetchUser();
  }, [userDetails,image]);
  const themeButtonClass = isDarkTheme ? "bg-transparent" : "bg-transparent";
  const themeButtonIcon = isDarkTheme ? (
    <>
      <img className="w-8 h-8" src="Images/sun.png" alt="Light Theme" />
      {document.documentElement.classList.add("dark")}
    </>
  ) : (
    <>
      <img className="w-8 h-8 " src="Images/night-mode.png" alt="Dark Theme" />
      {document.documentElement.classList.remove("dark")}
    </>
  );

  return (
    <nav
      className={`items-center flex justify-between h-16  dark:bg-black py-4 px-6 bg-gradient-to-r from-exteal to-blackyteal text-gray-800`}
    >
      <div className=" flex">
        <img src="Images/planet.png" className="mr-3" alt="" />
        <h1 className="text-white text-lg font-bold">Blog Post</h1>
      </div>

      <div className="flex items-center">
        <button
          className={`  text-gray-800 border rounded-full bg-sideclr font-bold p-2 sm:p-1  mr-4    ${themeButtonClass}`}
          onClick={toggleTheme}
        >
          {themeButtonIcon}
        </button>
        <div
          onClick={() => navigate("/profile")}
          className="flex flex-col items-center justify-center hover:cursor-pointer"
        >
          <img
            className="w-12 h-12 rounded-full"
            src={image && image ? image : "/Images/user.png"}
            alt="Profile"
          />
          {/* <p className="text-white sm:text-sm sm:font-medium font-medium">{userDetails.name}</p> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
