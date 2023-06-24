// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "../../Components/navbar/header";
import Sidebar from "../../Components/sideBar/sidebar";
import AddPost from '../../Components/inputEditor/AddPost'
import {useSelector} from 'react-redux'
import {  userReducer } from '../../redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'




function CreatePost() {
 
  const {accessToken} = useSelector(userReducer)
  const navigate = useNavigate()

  useEffect(()=>{
    
    if(accessToken == undefined || accessToken == ""){
      navigate('/login')
    }
  })



   
  return (
   
    
        <div className="flex overflow-hidden h-screen">
        <Sidebar />
        <div className="w-full ">
          <Header />
          <AddPost />
        </div>
      </div>
  );
}

export default CreatePost;
