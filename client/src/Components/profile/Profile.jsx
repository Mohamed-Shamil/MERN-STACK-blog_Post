// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { userReducer } from "../../redux/Slices/userSlice";
import authAPI from "../../Api/authApi";
import { useDispatch } from "react-redux";
import { setDetails } from "../../redux/Slices/userSlice";
import UserContents from "../content/userContents";
import FollowerAndFollowingComponent from "../about/FollowerAndFollowingComponent";

const { userProfile, editedUserData } = authAPI();

const Profile = () => {
  const dispatch = useDispatch();
  const userReduxData = useSelector(userReducer);
  const userId = userReduxData.id;
  const [userDetails, setUserDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userProfile(userReduxData.id);

      setUserDetails(userData);
      setName(userData?.name);
      setBio(userData?.bio);
      setImage(userData?.image);
    };
    fetchUser();
  }, [updateTrigger]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", userReduxData.id);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("image", image);

    const updatedProfile = await editedUserData(formData);

    if (updatedProfile) {
      const { name, bio } = updatedProfile.data;
      const { id, email, accessToken } = userReduxData;
      dispatch(setDetails({ id, name, email, bio, accessToken }));
      setShowModal(false);
      setUpdateTrigger((prev) => !prev);
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleImageUpload = (file) => {
    setSelectedImage(URL.createObjectURL(file));
    setImage(file);
  };

  return (
    <div className="flex h-screen  overflow-y-scroll">
      <div className="mt-20 ml-28">
        <h1 className="font-bold  text-gray-500 text-xl ">Profile</h1>
        {/* <hr className="border-1 w-[60%] border-gray-300 " /> */}
        <div className="flex items-center ">
          {image ? (
            <LazyLoadImage
              alt="Profile Picture"
              className="rounded-full mr-5 mt-3 w-24 h-24"
              src={image}
            />
          ) : (
            <img
              src="Images/user.png"
              className="mt-3 justify-ceneter h-24"
              alt=""
            />
          )}
          <h1 className="font-extrabold ml-5 font-serif text-4xl text-exteal">
            {userDetails && userDetails?.name}

            <div className="flex gap-4">
              <p className="font-medium font-sans text-lg text-exteal ">
                Followers {userDetails?.followers?.length}
              </p>
              <p className="font-medium font-sans text-lg text-exteal ">
                Following {userDetails?.following?.length}
              </p>
            </div>
          </h1>
        </div>

        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="button"
          onClick={() => setShowModal(true)}
          className="font-medium flex items-center font-mono mt-5 hover:text-orange-500 hover:-translate-y-1 hover:scale-125 duration-150 text-green-900 text-sm"
        >
          Edit Profile&nbsp;
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="15px"
            height="15px"
            className="mt-[-3%]"
            viewBox="0 0 494.936 494.936"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
                />
                <path
                  d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
                />
              </g>
            </g>
          </svg>
        </button>
        <p className="font-medium dark:text-white w-[30%] mt-5">{bio}</p>

        <div className="grid-cols-12 text-center grid gap-5 p-2  mt-28">
          <a
            onClick={() => setAbout(false)}
            className={` cursor-pointer ${
              about==false ? 'text-2xl font-bold text-exteal' : 'text-2xl font-normal text-gray-500'
            }  `}
          >
            Posts
          </a>
          <a
            onClick={() => setAbout(true)} className={` cursor-pointer ${
              about==false ? 'text-2xl font-normal text-gray-500' : 'text-2xl font-bold text-exteal ' 
            } `}
         >
            About
          </a>
        </div>

        <hr className="border-1 mb-5 border-gray-400 w-[80%]" />

        {about ? (
          <FollowerAndFollowingComponent userId={userId} />
        ) : (
          <UserContents userId={userId} />
        )}
      </div>

      {/* modal content */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black  opacity-70 backdrop-filter backdrop-blur-3xl"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="flex items-center justify-center flex-none w-12 h-12 rounded-full">
                  <img src="/Images/edit.png" alt="" />
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Edit Profile
                  </h4>
                  <div className="flex justify-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        className="mt-3  rounded-full w-24 justify-center h-24"
                        alt=""
                      />
                    ) : userDetails?.image ? (
                      <img
                        src={userDetails.image}
                        className="mt-3  rounded-full w-24 justify-center h-24"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/Images/user.png"
                        className="mt-3  rounded-full justify-center h-24"
                        alt=""
                      />
                    )}
                  </div>
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex p-2 justify-center flex-col">
                      <label className="mt-5 mb-1 font-medium" htmlFor="name">
                        Change your Name
                      </label>
                      <input
                        name="proName"
                        className="border rounded-sm p-2"
                        value={name}
                        onChange={handleName}
                        type="text"
                      />

                      <label
                        htmlFor="profilePic"
                        className="font-medium mt-5 mb-1"
                      >
                        Change your Profile Picture
                      </label>
                      <input
                        name="image"
                        type="file"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                        className="border p-2 rounded-sm"
                      />

                      <label className="mt-5 mb-1 font-medium" htmlFor="bio">
                        Change your Bio
                      </label>
                      <textarea
                        name="bio"
                        placeholder={
                          bio ? bio : "Share a little bit about yourself !"
                        }
                        value={bio}
                        onChange={handleBio}
                        type="text"
                        className="border p-2 rounded-sm"
                      />
                    </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 hover:shadow-gray-300 shadow-lg text-green-500 border bg-white hover:bg-green-600 hover:text-white rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 shadow-xl hover:bg-red-700 text-red-500 hover:text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
