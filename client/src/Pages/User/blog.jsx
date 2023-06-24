// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Header from '../../Components/navbar/header'
import Sidebar from '../../Components/sideBar/sidebar'
import FullContent from '../../Components/content/fullContent'
import {useSelector} from 'react-redux'
import {  userReducer } from '../../redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'


const Blog = () => {

 
  const {accessToken} = useSelector(userReducer)
  const navigate = useNavigate()

  useEffect(()=>{
    
    if(accessToken == undefined || accessToken == ""){
      navigate('/login')
    }
  })



  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="w-full ">
      <Header />
      <FullContent />
    </div>
  </div>
  )
}

export default Blog
