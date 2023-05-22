// eslint-disable-next-line no-unused-vars
import React from 'react'
import Preview from '../../Components/preview/preview'
import Navbar from '../../Components/navbar/navbar'
import Sidebar from '../../Components/sideBar/sidebar'

function preview() {
  return (
    <div className="bg-homebg">
    <div className="flex flex-col bg-homebg  dark:bg-homebg">
    
        <div className="z-9 ">
          {/* <!-- Navbar --> */}
           <Navbar /> 
        </div>
    
    
        <div className=" flex">
    
            <div className=" w-1/6 md:1/3" > <Sidebar /> </div>
            <div className="w-5/6  md:2/3 flex  mt-24 flex-col justify-center items-center"> 
            <Preview />
            </div>
    
        </div>
        </div>
    </div>
  )
}

export default preview