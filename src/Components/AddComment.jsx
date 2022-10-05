import React, { useState } from "react";
import { addCommentById } from "../utils/api";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button2 = styled(Button)({
  backgroundColor: "black",
});

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

  //const disableButton = !!comment.body.trim().length;

  return (
    <main>
      <form onSubmit={handleSubmit} className="form-wrap">
        {/* <input
          placeholder="What's on your mind..."
          onChange={(e) => {
            setComment((currentComment) => ({
              ...currentComment,
              body: e.target.value,
            }));
          }}
          value={comment.body}
        ></input> */}

        <TextField
          className="textbox"
          sx={{ width: "60%", m: "3" }}
          onChange={(e) => {
            setComment((currentComment) => ({
              ...currentComment,
              body: e.target.value,
            }));
          }}
          value={comment.body}
          required
          label=""
          name=""
          autoComplete=""
          autoFocus
          multiline
          size="small"
        />
        <Button2 type="submit" size="large" variant="contained">
          Add Comment
        </Button2>
      </form>
    </main>
  );
};

export default AddComment;
