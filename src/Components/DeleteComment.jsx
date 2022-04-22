import React, { useState } from "react";
import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, author, setComments, comments }) => {
  const [isAuthor] = useState("jessjelly");

  const handleDelete = () => {
    deleteComment(comment_id);
    const filteredComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(filteredComments);
  };

  if (author === isAuthor) {
    return (
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete Comment
      </button>
    );
  }
};

export default DeleteComment;
