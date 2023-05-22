import {  useEffect, useState } from "react";

import authAPI from '../../Api/authApi'


export default function Content() {

  const {getPost} = authAPI()
  const [post,setPost] = useState()


useEffect(()=>{
  getPost()
  const posts =  ( async ()=> {
    const {data} = await getPost()
    console.log(data);
    setPost(data);
  })
  posts()
},[])



  

  return (
    <>

     
      
<div className="gap-2 ">
  {post?.map((obj) => (
    <div key={obj._id} className="max-w-md max-h p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="mt-5">
        <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
      </a>
      <div dangerouslySetInnerHTML={{ __html: obj.content }}></div>
      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.content}</p> */}
      <a href="#" className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  ))}
</div>


        
     
   
  </>
  

  );
}
