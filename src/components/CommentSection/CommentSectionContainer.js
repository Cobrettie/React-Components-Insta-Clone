// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import dummyData from '../../dummy-data';

const CommentSection = props => {
  // Add state for the comments
  const [comment, setComment] = useState(dummyData[0].comments);

  console.log(comment);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(comment => {
        <Comment comment={comment} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;






// left off trying to get comments to render to web page