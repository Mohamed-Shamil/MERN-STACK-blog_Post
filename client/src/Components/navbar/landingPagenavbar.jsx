// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className=" relative">
      <nav className="z-90 fixed left-0 right-0 top-0 border-gray-200 bg-gradient-to-r from-exteal to-blackyteal dark:bg-gray-950">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a onClick={() => navigate("/home")} className="flex items-center">
            <span className=" whitespace-nowrap text-left text-2xl font-bold text-white dark:text-white">
              BLOG POST
            </span>
          </a>

          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <div>
              <ul>
                <li className="end flex">
                  <a
                    href="#"
                    onClick={() => navigate("/login")}
                    className="block rounded py-2 pl-3 pr-4 text-white hover:bg-red-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-sideclr md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
