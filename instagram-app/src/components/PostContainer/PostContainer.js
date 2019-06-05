import React, { Component } from "react";
// import { Highlight } from "react-instantsearch-dom";
import PropTypes from "prop-types";
import uuid from "uuid";
import "./PostContainer.css";
import Comments from "../CommentSection/CommentSection";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import AddComment from "../CommentSection/AddComment";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: "",
      likes: this.props.post.likes,
      like: false
    };
  }

  changeHandler = e => {
    this.setState({
      comment: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    const newComment = {
      id: uuid(),
      username: "user",
      text: this.state.comment
    };
    const commentList = this.state.comments.concat(newComment);
    this.setState({
      comments: commentList,
      comment: ""
    });
  };

  toggleLike = () => {
    this.setState({
      like: !this.state.like
    });
    return !this.state.like
      ? this.setState({ likes: this.state.likes + 1 })
      : this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <div id={this.props.id} className="post-container">
        <div className="user-profile">
          <div>
            <div className="thumbnail">
              <img src={this.props.thumbNail} alt="User thumbnails " />
            </div>
          </div>
          <div className="username">{this.props.userName}</div>
          {/* <div className="username">
            <Highlight attribute="username" hit={this.props.hit} />
          </div> */}
        </div>

        <div className="insta-post">
          <div>
            <img src={this.props.img} alt="Instagram post" />
          </div>
          <div className="like-icon">
            <div className="interact-icon">
              <FiHeart
                onClick={this.toggleLike}
                className={this.state.like ? "red" : ""}
              />
              <FiMessageCircle />
            </div>

            <div className="likes">{this.state.likes} likes</div>
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
