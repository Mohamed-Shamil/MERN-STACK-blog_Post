// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
// import BlogContext from '../../context/blogContext'
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import authAPI from "../../Api/authApi";
import { useNavigate } from "react-router-dom";

function Preview() {
  const { createPost } = authAPI();

  //   const verifyUser = async ()=>{
  //       const {data} = await getUserId()
  //         console.log(data);
  //   }

  //   useEffect(() => {
  //     verifyUser();
  //   }, [])
  const navigate = useNavigate();
  // const location = useLocation();
  // const { newContent } = location.state || {}; // Access the content value from location state
  const content = localStorage.getItem("content");
  const title = localStorage.getItem("title");
  const userId = localStorage.getItem("userId");

  console.log(content);
  console.log(title);
  console.log(userId);

  const publishPost = async () => {
    const post = {
      content,
      title,
      userId,
    };
    console.log(post);
    ///uivde mutgal chhyuka work //
    const publishedPost = await createPost(post);
    if (!publishedPost) {
      throw "post not created";
    }else{

      navigate("/home");
    }
    
  };

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-6">Preview</h1>
    <div className="border border-black p-6">
      <h2 className="text-5xl font-bold mb-6 text-center">{title}</h2>
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  
    <button
      className="mt-8 px-4 py-2 bg-teal-700 text-white font-bold rounded"
      onClick={publishPost}
    >
      Post
    </button>
  </div>
  
  );
}

export default Preview;
