// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="flex h-screen  bg-yellow-000">
        <div className="flex bg-yellow-000 justify-center items-center w-1/2">
          <h1 className="text-6xl p-6 text-teal-900 italic  text-center font-bold">
            Transcending The Horizons
          </h1>
        </div>
        <div className="bg-cyan-000 grid place-items-center w-1/2">
          <img
            className="h-96 w-96 object-contain drop-shadow-xl"
            src="Images\blogging-blogger-freelance-creative-writing-copy-writer-content-management-job-journalist-flat-cartoon-character-illustration-138916445.jpg"
            alt=""
          />
        </div>
      </div>

      {/* next div  */}

      <div
        className="h-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('Images/earth-1.jpg')" }}
      >
        <p className="text-7xl p-24 font-bold  text-white text-center">
          Comprehensive and innovative <br />
          intelligence from across the globe
        </p>
        <div
          data-aos="fade-up"
          className="bg-gray-800  bg-opacity-60 h-80 rounded-lg p-8 shadow-lg transform translateY(-50%) lg:translateY(-40%) xl:translateY(-30%)"
        >
          <div className="flex space-x-5 mt-10 justify-between ">
            <div className="">
              <a
                style={{ backgroundImage: "url('Images/techno 2.jpg')" }}
                href="#"
                className="block w-full bg-cover bg-center h-52 max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-indigo-950 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div className="">
              <a
                style={{
                  backgroundImage:
                    "url('Images/isometric-freelancer-outsource-worker-office-taking-money-cash-businessman-online-work-background-smartphone-148740525.jpg')",
                }}
                href="#"
                className="block w-full bg-cover bg-center h-52 max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-indigo-100 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div className="">
              <a
                style={{ backgroundImage: "url('Images/conferenc1.jpg')" }}
                href="#"
                className="block w-full h-52 bg-cover bg-center max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-400 dark:text-blue-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-indigo-950 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
            <div className="">
              <a
                style={{ backgroundImage: "url('Images/travel.jpg')" }}
                href="#"
                className="block w-full bg-cover h-52 bg-center max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-indigo-950 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen grid place-items-center  bg-white-700">
        <h3 className=" font-bold text-7xl transform hover:scale-105 text-shadow hover:text-sky-400  bg-gradient-to-r from-teal-700 to-black bg-clip-text text-transparent">
          Comprehensive and innovative <br /> intelligence from across the globe
        </h3>
      </div>
      <div className="h-screen bg-teal-700"></div>
    </>
  );
}

export default LandingPage;
