import React from "react";

const AddComment = ({ comment, submitComment, containerId , changeHandler }) => {
  return (
    <form onSubmit={submitComment} id={containerId} className="add-comment">
      <input
        value={comment}
        type="text"
        placeholder="Add a comment..."
        onChange = {(event) =>  changeHandler(event) }
      />
    </form>
  );
};

export default AddComment;
