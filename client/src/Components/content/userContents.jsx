/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../Api/authApi";

const { getUserPosts, getBlog } = authAPI();

const UserContents = (props) => {
  const navigate = useNavigate();
  const { userId } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userPosts = await getUserPosts(userId);
      setPosts(userPosts.data);
    };

    fetchPosts();
  }, [userId]);

  const handleBlog = async (postId) => {
    const response = await getBlog(postId);
    if (response) {
      navigate("/blog", { state: { postId } });
    }
  };

  if (posts.length === 0) {
    return <p className="text-lg font-medium">You don`t have any posts yet.</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="pt-6 pb-12 bg-sideclr mb-10">
        <div id="card">
          <h2 className="text-center font-serif uppercase text-2xl xl:text-3xl">
            Recent Articles
          </h2>
          {/* container for all cards */}
          <div className="container h-96 w-full lg:w-4/5 mx-auto flex flex-col">
            {posts.map((post, index) => (
              <div
                key={index}
                onClick={() => handleBlog(post._doc._id)}
                className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
              >
                <div className="w-auto h-auto md:w-1/2">
                  <img
                    className="inset-0 h-36 w-96 object-cover object-center"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>

                <div className="w-full py-2 px-6 text-gray-800 flex flex-col">
                  <h3 className="font-bold text-2xl leading-tight truncate">
                    {post._doc.title}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-wide font-semibold mt-2">
                    Created on:{" "}
                    {new Date(post._doc.createdAt).toLocaleString("default", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="mt-2 font-serif font-medium">
                    {post._doc.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContents;
