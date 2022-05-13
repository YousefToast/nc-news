import React, { useState } from "react";
import { addCommentById } from "../utils/api";

const AddComment = ({ article_id, comments, setComments }) => {
  const [comment, setComment] = useState({
    username: "jessjelly",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentById(article_id, comment.body, comment.username);
    setComment((currentComment) => ({
      ...currentComment,
      body: "",
    }));
    setComments((currComments) => {
      return [
        ...currComments,
        {
          author: comment.username,
          body: comment.body,
          votes: 0,
          comment_id: -1,
        },
      ];
    });
  };

  const disableButton = !!comment.body.trim().length;

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
        <button disabled={!disableButton} type="submit">
          Add Comment
        </button>
      </form>
    </main>
  );
};

export default AddComment;
