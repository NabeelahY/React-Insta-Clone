import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import "./PostContainer.css";
import Comments from "../CommentSection/CommentSection";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import AddComment from "../CommentSection/AddComment";

class PostContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
  }

  addComment = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    const newComment = {
      id: uuid(),
      username: 'user',
      text: this.state.comment
    }
      const commentList = this.state.comments.concat(newComment);
      this.setState({
        comments: commentList,
        comment: ''
      })
  }

render () {
  return (
    <div id = {this.props.id} className="post-container">
      <div className="user-profile">
        <div>
          <div className="thumbnail">
            <img src={this.props.thumbNail} alt="User thumbnails " />
          </div>
        </div>
        <div className="username">{this.props.userName}</div>
      </div>

      <div className="insta-post">
        <div>
          <img src={this.props.img} alt="Instagram post" />
        </div>
        <div className="like-icon">
          <div className="interact-icon">
            <FiHeart />
            <FiMessageCircle />
          </div>

          <div className="likes">{this.props.likes} likes</div>
        </div>
      </div>

      <div>
        <div key={uuid()}>
          <Comments comments={this.state.comments} />
        </div>

        <div className="timestamp">{this.props.time}</div>

        
        <AddComment
          submitComment={this.addComment}
          containerId={this.props.containerId}
          comment={this.state.comment}
          changeHandler={this.changeHandler}
        />

      </div>
    </div>
  );
  }
} 

PostContainer.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  userComments: PropTypes.array.isRequired
};

export default PostContainer;
