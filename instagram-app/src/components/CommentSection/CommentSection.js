import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const Comments = (props) => {
  return props.comments.map(content => (
    <div id={content.id} key={content.id} className="comment">
      <span className="commenter">{content.username}</span> {content.text}
    </div>
  ));
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
