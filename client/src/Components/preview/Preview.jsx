// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import authAPI from "../../Api/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postReducer } from "../../redux/Slices/postSlice";
import { userReducer } from "../../redux/Slices/userSlice";




function Preview() {
  const postDetails = useSelector(postReducer);
  const userDetails = useSelector(userReducer)
  
  
  const imageUrl = URL.createObjectURL(postDetails.image)

  // const post = {
  //   autherId: userDetails.id,
  //   title: postDetails.title,
  //   image: postDetails.image,
  //   content: postDetails.content
  // }
  let formData = new FormData()
  formData.append("autherId", userDetails.id)
  formData.append("title",postDetails.title)
  formData.append("image",postDetails.image)
  formData.append("content",postDetails.content)
  formData.append("subTitle",postDetails.subTitle)
  
  const { createPost } = authAPI();
  const navigate = useNavigate();

  const publishPost = async () => {

    const publishedPost = await createPost(formData);
    console.log(publishedPost);
    console.log(userDetails.id);
    if(publishedPost){
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col overflow-y-scroll items-center">
    <h1 className="text-4xl font-bold mb-6">Story Preview</h1>
    <div className="border border-black p-6">
      <div>
    {imageUrl && <img className="w-96 h-52" src={imageUrl}/>}
   </div>
      <hr />
      <h2 className="text-5xl font-bold mb-6 text-center">{postDetails.title}</h2>
    <hr />
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: postDetails.content }}
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
