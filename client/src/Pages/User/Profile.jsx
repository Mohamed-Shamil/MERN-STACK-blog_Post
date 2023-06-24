// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
// import Navbar from '../../Components/navbar/navbar'
import Header from '../../Components/navbar/header'
import Sidebar from '../../Components/sideBar/sidebar'
import Profile from '../../Components/profile/Profile'
import {useSelector} from 'react-redux'
import {  userReducer } from '../../redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'


const UserProfile = () => {

 
  const {accessToken} = useSelector(userReducer)
  const navigate = useNavigate()

  useEffect(()=>{
    
    if(accessToken == undefined || accessToken == ""){
      navigate('/login')
    }
  })



  return (
  
 
     <div className="flex h-screen overflow-hidden">
     <Sidebar />
     <div className="w-full ">
       <Header />
       <Profile />
     </div>
   </div>
  )
}

export default UserProfile
