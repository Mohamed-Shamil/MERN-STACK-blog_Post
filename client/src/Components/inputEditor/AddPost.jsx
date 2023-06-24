// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../../redux/Slices/postSlice";

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

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [imageError, setImageError] = useState("");
  const [contentError, setContentError] = useState("");
  const handleAnimations = () => {
    setShowEditor(!showEditor);
    setIsRotated(!isRotated);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setTitleError("");
      setSubTitleError("");
      setImageError("");
      setContentError("");

      // form validation
      let isValid = true;

      if (title.trim() === "") {
        setTitleError("Title is required");
        isValid = false;
      }

      // if (subTitle.trim() === "") {
      //   setSubTitleError("Subtitle is required");
      //   isValid = false;
      // }

      if (!image) {
        setImageError("Cover image is required");
        isValid = false;
      }

      if (!content) {
        setContentError("Content is required");
        isValid = false;
      }

      if (!isValid) {
        return;
      }
      dispatch(setDetails({ title, subTitle, content, image }));
      navigate("/preview");
    } catch (error) {
      throw { msg: error.msg, error };
    }
  };

  // const handleChange = (...args)=>{
  //   console.log(args[3].getContents())
  //   setContent(args[3].getContents())
  // }
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Add image validation here if needed
      setSelectedImage(URL.createObjectURL(file));
      setImage(file);
      setImageError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      // Add image validation here if needed
      setSelectedImage(URL.createObjectURL(file));
      setImageError("");
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-[90%] overflow-y-scroll">
      <form className="" onSubmit={handleSubmit}>
        <div className="container  mt-8 px-4">
          <h1 className="text-3xl md:text-5xl text-teal-950 font-bold mb-4">
            Craft Your Blog Here...
          </h1>
          <div className="flex flex-col  mt-5 md:flex-col items-start md:items-end mb-4 w-full">
            <input
              type="text"
              name="title"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full bg-transparent mt-4 font-bold border-b-2 border-teal-700 focus:outline-none text-2xl md:text-4xl ${
                titleError ? "border-red-500" : ""
              }`}
            />
            {titleError && <p className="text-red-500">{titleError}</p>}

            <input
              type="text"
              name="subTitle"
              placeholder="Subtitle..."
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className={`w-full bg-transparent mt-8 text-gray-500 font-medium border-b-2  border-teal-700 focus:outline-none text-xl md:text-xl ${
                titleError ? "border-red-500" : ""
              }`}
            />
            {subTitleError && <p className="text-red-500">{subTitleError}</p>}

            <div className="w-full flex mt-5 justify-start">
              <div className="max-w-xl">
                <label
                  className="text-2xl text-teal-700 font-semibold"
                  htmlFor=""
                >
                  Add Your Cover Image
                </label>
                <label
                  className="flex mt-5 justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {selectedImage ? (
                    <div className="relative h-32 w-auto">
                      <img
                        className="h-full w-auto object-cover"
                        src={selectedImage}
                        alt="Selected Image"
                      />
                      <button
                        className="absolute top-1 right-1 p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                        onClick={handleCancel}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="font-medium text-gray-600">
                        Drop files to Attach, or &nbsp;
                        <span className="text-teal-600 underline">browse</span>
                      </span>
                    </span>
                  )}
                  <input
                    onChange={handleImageChange}
                    className="w-full hidden text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    name="image"
                    type="file"
                    accept="image/*"
                  />
                </label>
                {contentError && <p className="text-red-500">{imageError}</p>}
              </div>
            </div>
          </div>
          <a href="#" onClick={handleAnimations}>
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
            <div className="">
              <ReactQuill
                theme="snow"
                name="content"
                value={content}
                // onChange={handleChange}
                onChange={setContent}
                placeholder={"Tell your story"}
                modules={modules}
              />
              {contentError && <p className="text-red-500">{contentError}</p>}
            </div>

            <div className="justify-center flex mt-5">
              <button
                type="submit"
                onClick={() => handleSubmit}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-homebg dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Preview
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
