// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../Components/navbar/navbar";
import Sidebar from "../../Components/sideBar/sidebar";
import AddPost from '../../Components/inputEditor/addPost'


function CreatePost() {
   
  return (
    <div className="bg-homebg">
      <div className="flex flex-col bg-homebg  dark:bg-homebg">
        <div className="z-9 ">
          {/* <!-- Navbar --> */}
          <Navbar />
         
        </div>

        <div className=" flex">
          <div className=" md:1/3 w-1/6">
           
            <Sidebar />
          </div>
          <div className="md:2/3  mt-24 flex  w-5/6 flex-col items-center justify-center">
            <AddPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
