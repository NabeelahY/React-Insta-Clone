import React from "react";
import PropTypes from 'prop-types';
import uuid from 'uuid';
import "./PostContainer.css";
import Comments from "../CommentSection/CommentSection";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import AddComment from "../CommentSection/AddComment";


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
          <div key = {uuid()}> 
            <Comments commentor={comment.username} comment={comment.text} />
          </div>
        ))}
        <div className= 'timestamp'>{time}</div>
        <AddComment />
      </div>
    </div>
  );
};


PostContainer.propTypes= {
  thumbNail: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  userComments: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default PostContainer;
