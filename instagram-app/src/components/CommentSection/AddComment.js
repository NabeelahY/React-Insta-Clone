import React from "react";

const AddComment = ({ comment }) => {
  return (
    <form className='add-comment'>
      <input value={ comment } type="text" placeholder="Add a comment..." />
    </form>
  );
};

export default AddComment;
