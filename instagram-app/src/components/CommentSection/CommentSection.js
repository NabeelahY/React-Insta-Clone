import React from "react";
import './CommentSection.css'
import PropTypes from 'prop-types';

const Comments = ({ commentor, comment }) => {
    return <div className='comment'><span className='commenter'>{ commentor }</span> { comment }</div>
}

Comments.propTypes= {
    commentor: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
}

export default Comments;
