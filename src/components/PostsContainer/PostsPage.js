//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';

const PostsPage = () => {
  const [post, setPost] = useState(dummyData);
  
  return (
    <div className="posts-container-wrapper">

      {post.map(post => {
        return <Post post={post} />
      })}
      
    </div>
  );
};

export default PostsPage;

