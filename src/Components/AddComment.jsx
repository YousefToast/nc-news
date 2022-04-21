import React, { useState } from "react";
import { addCommentById } from "../utils/api";

const AddComment = ({ article_id }) => {
  const [comment, setComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentById(article_id, comment.body, comment.username);
    setComment({ ...comment, body: "" });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What's on your mind..."
          onChange={(e) => {
            setComment((currentComment) => ({
              ...currentComment,
              body: e.target.value,
            }));
          }}
          value={comment.body}
        ></input>
        <button type="submit">Add Comment</button>
      </form>
    </main>
  );
};

export default AddComment;
