/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import authAPI from "../../Api/authApi";

const { getFollowers, getFollowing } = authAPI();

const FollowerAndFollowingComponent = (props) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const { userId } = props;
  useEffect(() => {
    const fetchFollowersAndFollowing = async () => {
      const followers = await getFollowers(userId);
      const following = await getFollowing(userId);
      setFollowers(followers);
      setFollowing(following);
    };
    fetchFollowersAndFollowing();
  }, []);
  return (
    <div>
      <div className="w-full justify-around py-5 pt-6 flex dark:border-orange-800 border-2 dark:bg-black bg-sideclr mb-10">
        <div>
            <h2 className="font-bold mb-2 dark:text-white text-2xl">Followers</h2>
          

        <a
          href="#!"
          className="block w-full cursor-pointer dark:text-white rounded-lg text-center transition duration-500 hover:bg-neutral-100 hover:text-blackyteal focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-300 dark:hover:text-neutral-900 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
          >
          {followers?.map((obj) => (
              <span key={obj.id}>{obj.name}</span>
              ))}
        </a>
              </div>

<div>
    <h2 className="text-2xl mb-2 dark:text-white  font-bold text-center">Following</h2>
        <a
          href="#!"
          className="block w-full cursor-pointer dark:text-white rounded-lg text-center transition duration-500 hover:bg-neutral-100 hover:text-blackyteal focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-300 dark:hover:text-neutral-900 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
          >
          {following?.map((obj) => (
              <span key={obj.id}>{obj.name}</span>
              ))}
        </a>
              </div>
      </div>
    </div>
  );
};

export default FollowerAndFollowingComponent;
