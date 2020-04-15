//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = (props) => {
  const [posts , setPosts] = useState(2)

  return (
    <div className="posts-container-wrapper">
      
      {dummyData.map((item, index) => {
        return <Post key={index} post={item} />;
      })}
    </div>
  );
};

export default PostsPage;
