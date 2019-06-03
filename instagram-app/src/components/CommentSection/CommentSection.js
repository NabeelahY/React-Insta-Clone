import React from "react";
import './CommentSection.css'

const Comments = ({ commentor, comment }) => {
    return <div><span className='commenter'>{ commentor }</span> { comment }</div>
}

export default Comments;
