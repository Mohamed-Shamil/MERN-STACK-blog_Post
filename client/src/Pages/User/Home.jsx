// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "../../Components/navbar/header";
import Sidebar from "../../Components/sideBar/sidebar";
import Content from "../../Components/content/content";


function Feed() {
  return (
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        
        <div className="w-full ">
          <Header />
        
          <Content />
        </div>
      </div>
  );
}

export default Feed;
