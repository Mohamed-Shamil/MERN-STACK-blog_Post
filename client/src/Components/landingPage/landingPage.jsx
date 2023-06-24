// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const navigate = useNavigate()
  return (
    <>
     
      <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Transcending The Horizons</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">BoundlessWords: Empowering Creativity and Connectivity through Blogging.</p>
      <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Get started
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
      <a href="#" onClick={()=>navigate('/signup')} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Get Started
      </a> 
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/Images/spacebook.jpeg" className="p-5 mt-5" alt="mockup" />
    </div>                
  </div>
</section>


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
          <div className="z-10 flex space-x-5 mt-10 justify-between ">
            <div className="">
              <a
                style={{ backgroundImage: "url('Images/techno 2.jpg')" }}
                href="#"
                className="block w-full bg-cover bg-center h-52 max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className=" pt-14 mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                {/* <p className="font-normal text-indigo-950 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
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
                <h5 className= "pt-14 mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>
                {/* <p className="font-normal text-indigo-100 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
              </a>
            </div>

            <div className="">
              <a
                style={{ backgroundImage: "url('Images/conferenc1.jpg')" }}
                href="#"
                className="block w-full h-52 bg-cover bg-center max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="pt-14 mb-2 text-2xl font-bold tracking-tight text-orange-600 dark:text-blue-900">
                  Noteworthy technology acquisitions 2021
                </h5>
                
              </a>
            </div>
            <div className="">
              <a
                style={{ backgroundImage: "url('Images/travel.jpg')" }}
                href="#"
                className="block w-full bg-cover h-52 bg-center max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-00 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="pt-14 mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>
                {/* <p className="font-normal text-indigo-950 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
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
