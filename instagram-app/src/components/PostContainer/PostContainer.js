import React from "react";
import "./PostContainer.css";
import Comments from "../CommentSection/CommentSection";
import { FiHeart, FiMessageCircle } from "react-icons/fi";

const PostContainer = ({
  thumbNail,
  userName,
  img,
  likes,
  time,
  userComments
}) => {
  return (
    <div className="post-container">
      <div className="user-profile">
        <div>
          <div className="thumbnail">
            <img src={thumbNail} alt="User thumbnails " />
          </div>
        </div>
        <div className="username">{userName}</div>
      </div>

      <div className="insta-post">
        <div>
          <img src={img} alt="Instagram post" />
        </div>
        <div className="like-icon">
          <div className="interact-icon">
            <FiHeart />
            <FiMessageCircle />
          </div>

          <div className="likes">{likes} likes</div>
        </div>
      </div>

      <div>
        {userComments.map(comment => (
          <div key = {comment.username}> 
            <Comments commentor={comment.username} comment={comment.text} />
          </div>
        ))}
      </div>

      <div className= 'timestamp'>{time}</div>
    </div>
  );
};

export default PostContainer;
