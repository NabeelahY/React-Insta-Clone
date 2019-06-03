import React from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";

const PostContainer = ({ thumbNail, userName, img, likes, time }) => {
  return (
    <div>
        <div>
          <div>
            <img src={ thumbNail } />
          </div>
          <div>{ userName }</div>
        </div>

        <div>
          <img src={ img } />
          <div>
            <FiHeart />
            <FiMessageCircle />
            <div>{ likes }</div>
          </div>

        </div>

        <div>{ time }</div>
    </div>
  );
};

export default PostContainer;
