// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import BlogContext from "../../context/blogContext";
// // import { useNavigate } from "react-router-dom";

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     [{ font: [] }],
//     [{ size: [] }],
//     [{ align: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link", "image", "video"],
//   ],
// };

// // eslint-disable-next-line react/prop-types
// function AddPost() {

//   const [showEditor, setShowEditor] = useState(false);
//   const [isRotated, setIsRotated] = useState(false);
//   const [content, setContent] = useState({
//     title: "",
//     editor: ""
//   });

//   // const navigate = useNavigate();

//   const handleLinkClick = () => {
//     setShowEditor(!showEditor);
//     setIsRotated(!isRotated);
//   };

//   const handleContextChange = (e) => {
//    const {name, value} = e.target
//    setContent((prev) => {
//     return {...prev, [name]: value}
//   })
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(content, "  hiiiiiiiiiiiiii");
//     try {
//       //  if(user.userData && !user.userData.isAuth){
//       // return alert("Please Login First") }
//       // const blogResponse =  await addPost(value,title)
//       // if(blogResponse){
//       //   navigate('/preview')
//       // }
//     } catch (error) {
//       throw { msg: error.msg, error };
//     }
//   };

//   return (
// //     <BlogContext.Provider value={{ content, handleContextChange }}>
// //       <div className="container mx-auto mt-8 px-4">
// //         <h1 className="text-3xl md:text-5xl font-bold mb-4">
// //           Craft Your Blog Here...
// //         </h1>

// //         <div className="flex flex-col mt-5 md:flex-col items-center mb-4">

// //         <input
// //           type="text"
// //           placeholder="Title..."
// //           onChange={(e) => setContent(e.target.value)}
// //           className="flex-1 ml-0 md:ml-4 bg-transparent mt-4 md:mt-0 border-b-2 border-teal-600 focus:outline-none text-2xl md:text-4xl"
// //         />

// //         <div className="flex">

// // <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
// // <input name="image" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

// //         </div>

// //           <a href="#" onClick={handleLinkClick}>
// //             <img
// //               src="Images/sign.png"
// //               className={`h-8 transition-all  duration-700 cursor-pointer transform ${
// //                 isRotated ? "rotate-45" : ""
// //               }`}
// //               alt="Toggle Editor"
// //             />
// //           </a>
// //         </div>
// //         <div
// //           className={`transition-all mt-5 duration-700 ${
// //             showEditor
// //               ? "max-h-96 scroll-mt-5  opacity-100"
// //               : "max-h-0 opacity-0"
// //           }`}
// //         >
// //           <div className="max-h-96 overflow-y-scroll">
// //             <ReactQuill
// //               theme="snow"
// //               onChange={setContent}
// //               placeholder={"Tell your story"}
// //               modules={modules}
// //             />
// //           </div>

// //           <form onSubmit={handleSubmit}>
// //             <div className="justify-center flex mt-5">
// //               <button
// //                 // onClick={() => navigate("/preview", { state: { content } })}
// //                 className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
// //               >
// //                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-homebg dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //                   Preview
// //                 </span>
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //       </div>
// //     </BlogContext.Provider>

// <div>
//   <div className="flex-col">

//         <input
//          type="text"
//           placeholder="Title..."
//            onChange={(e) => setContent(e.target.value)}
//           className="flex-1 ml-0 md:ml-4 bg-transparent mt-4 md:mt-0 border-b-2 border-teal-600 focus:outline-none text-2xl md:text-4xl"
//          />

//   </div>
// </div>

//   );
// }

// export default AddPost;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BlogContext from "../../context/blogContext";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
  ],
};

function AddPost() {
  const [showEditor, setShowEditor] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [title,setTitle] = useState()
  const [editor,setEditor] = useState()
  const [content, setContent] = useState({
    title: "",
    editor: "",
  });

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setShowEditor(!showEditor);
    setIsRotated(!isRotated);
  };

  const handleContextChange = (e) => {
    e.preventDefault()
    setContent((prevContent) => ({
      ...prevContent,
      editor: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title,editor);
    // const newContent = {
    //   title,
    //   editor
    // }
    // console.log(newContent);
    localStorage.setItem("title",title)
    localStorage.setItem("content",editor)
    // console.log(content, "  hiiiiiiiiiiiiii");
    navigate('/preview')
    try {
      //  if(user.userData && !user.userData.isAuth){
      // return alert("Please Login First") }
      // const blogResponse =  await addPost(value,title)
      // if(blogResponse){
     
      // }
    } catch (error) {
      throw { msg: error.msg, error };
    }
  };

  return (
    <BlogContext.Provider value={{ content, handleContextChange }}>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Craft Your Blog Here...
        </h1>
        <div className="flex flex-col mt-5 md:flex-col items-start md:items-end mb-4 w-full">
  <input
    type="text"
    placeholder="Title..."
    value={title}
    // onChange={(e) =>
    //   setContent((prevContent) => ({
    //     ...prevContent,
    //     title: e.target.value,
    //   }))
    // }
    onChange={((e)=>setTitle(e.target.value))}
    className="w-full bg-transparent mt-4 font-bold border-b-2 border-teal-600 focus:outline-none text-2xl md:text-4xl"
  />

  <div className="w-full flex mt-5 justify-start">
    {/* <label
      className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
      htmlFor="file_input"
    >
      Upload Cover Image &nbsp;
    </label>

    <input
      name="image"
      className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
      onClick={handleContextChange}
    /> */}



  </div>
</div>
<a href="#" onClick={handleLinkClick}>
    <img
      src="Images/sign.png"
      className={`h-8 transition-all duration-700 cursor-pointer transform ${
        isRotated ? "rotate-45" : ""
      }`}
      alt="Toggle Editor"
    />
  </a>
        <div
          className={`transition-all mt-5 duration-700 ${
            showEditor
              ? "max-h-96 scroll-mt-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-96 overflow-y-scroll">
            <ReactQuill
              theme="snow"
              value={editor}
              onChange={setEditor}
              placeholder={"Tell your story"}
              modules={modules}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="justify-center flex mt-5">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-homebg dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Preview
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </BlogContext.Provider>
  );
}

export default AddPost;
