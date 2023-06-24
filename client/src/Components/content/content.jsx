// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../Api/authApi";


export default function Content() {
  const { getPost, getBlog } = authAPI();
  const navigate = useNavigate();
  const [post, setPost] = useState();


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost();
       

        let data = response.map((post) => {
          const { _id, author, title, subTitle, imageUrl, content, authorImageUrl, createdAt } = post;
          console.log(authorImageUrl);

          const maxWords = 12;
          const contentWords = content.split(" ");
          const limitedContent = contentWords.slice(0, maxWords).join(" ");
          const displayContent = contentWords.length > maxWords? `${limitedContent}...`: limitedContent;

          const createdOn = new Date (createdAt)
          const formatedDate = createdOn.toLocaleDateString("en-us",{
           
            month:"short",
            day:"numeric",
           
          })

          return {
            _id,
            author,
            title,
            subTitle,
            imageUrl,
            authorImageUrl,
            content: displayContent,
            createdAt:formatedDate
          };
        });

        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, []);

  const handleBlog = async (postId) => {
    const response = await getBlog(postId);
    if (response) {
      navigate("/blog", { state: { postId } });
    }
  };


  return (
    <>
      <div className="p-4 sm:ml-48 overflow-scroll h-[95%] px-4 py-8">
     
        <div className="gap-2">
          {post?.map((obj) => (
            
            <div
            key={obj._id}
            className="max-w-2xl mt-5 flex  rounded-sm  border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700"
            >
         
              
              <div className="flex flex-col w-5/6 justify-between p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 mr-2">
                            <img
              src={obj?.authorImageUrl && obj?.authorImageUrl ? obj?.authorImageUrl: "Images/user.png"}
             
              className="w-14 mt-2 rounded-full h-14"
              alt="Profile"
            />
                          </div>
                          <div>
                            <p className="text-gray-900 font-medium">{obj.author} &nbsp;</p>
                          </div>
            <p className="text-sm mt-1 text-gray-500 font-serif"> Created on  {obj.createdAt}</p>
                        </div>
                <div className="mt-2">
                  <a href="#" onClick={() => handleBlog(obj._id)} className="hover:underline">
                    <h5 className="mb-2 text-2xl font-medium tracking-tight font-serif text-gray-900 dark:text-white">
                      {obj.title}
                    </h5>

                  <div className="text-gray-500 mb-4">
                    {obj.subTitle ? (
                      <h2 className="text-lg hover:underline font-extralight font-serif mb-2">{obj.subTitle}</h2>
                      ) : null}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: obj.subTitle ? "" : obj.content,
                      }}
                      ></div>
                  </div>
                </a>
                      
                </div>
              
              </div>
              {obj.imageUrl && (
                <img
                onClick={() => handleBlog(obj._id)}
                className="w-1/3  object-cover p-5 object-center"
                src={obj.imageUrl}
                alt="Post Image"
                />
              )}
            </div>
           ))}
        </div>
      </div>
      </>
      );
    }
