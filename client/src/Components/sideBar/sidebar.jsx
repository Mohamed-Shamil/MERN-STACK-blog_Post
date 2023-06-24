// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetDetails } from "../../redux/Slices/userSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Explore", src: "compass", link: "/home" },
    { title: "Inbox", src: "chat", link: "/chat" },
    { title: "Write", src: "content-writing", link: "/addPost" },
    { title: "Logout", src: "logout", link: "/login" },
  ];

  const handleButtonClick = (link) => {
    if (Menus.link == "/login") {
      handleLogout();
    }
    navigate(link);
  };
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(resetDetails());
    navigate("/login");
  };

  return (
    <div className=" flex gap-6">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20" 
        } duration-700 p-5 pt-8 bg-sideclr  sm:block ${
          open ? "sm:block" : "hidden sm:block"
        }
        `}
      >
      
        {/* <div className="flex gap-x-4 items-center">
          <img
            src="Images/planet.png"
            className={`curser-pointer w-8 h-8 duration-500 ${
              open && "rotate-[-360deg]"
            } `}
          />
          <h1
            className={`text-exteal origin-left font-bold text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Blog Post
          </h1>
        </div> */}
        <div className={`flex justify-end border ${open && "border-2 w-10 ml-56"} border-exteal rounded-full   p-2`}>
       <img
          src="Images/right-arrow.png"
          className={`cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-sideclr ${
            open && "rotate-180"
          }`}
          onClick={toggleSidebar}
        />
       </div>
        <ul className="pt-6 ">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-exteal text-sm  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-green-100 rounded-md ${
                menu.gap ? "mt-9" : "mt-2 "
              } ${index === index && open === true && "hover:bg-homebg hover:animate-bounce"}`}
              onClick={() => {
                if (menu.link === "/login") {
                  handleLogout();
                } else {
                  handleButtonClick(menu.link);
                }
              }}
            >
              <img className="w-9" src={`Images/${menu.src}.png`} />
              <span
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`${
                  !open && "opacity-0 translate-x-28 "
                } whitespace-pre origin-left duration-500`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
       
      </div>

      {/* Bottom bar */}
      <div
      
        className={`flex  w-full fixed bottom-0 left-0 bg-sideclr h text-white justify-between items-center px-4 py-1 sm:hidden`}
      >
        {Menus.map((menu, index) => (
          <div key={index} className="flex items-center gap-x-2 p-1">
            <img
              src={`Images/${menu.src}.png`}
              onClick={() => handleButtonClick(menu.link)}
              className="w-9 h-9"
            />
            {/* <span>{menu.title}</span> */}
          </div>
        ))}
        {/* <img
          src="Images/right-chevron.png"
          className="cursor-pointer w-6 h-6 transform rotate-180"
          onClick={toggleSidebar}
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;