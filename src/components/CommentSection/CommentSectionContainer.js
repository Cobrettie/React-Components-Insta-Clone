// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

// import dummyData from '../../dummy-data';

const CommentSection = props => {
  // stretch
  // Add state for the comments
  // const [comment, setComment] = useState(.comments);

  console.log('comments', props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(item => {
        return <Comment comment={item} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
