import React, { useEffect, useState } from "react";
import { fetchCommentsById } from "../utils/api";
import "../styling/SingleArticle.css";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsById(article_id).then((res) => {
      setComments(res.comments);
    });
  });

  return (
    <section>
      <ul className="commentList">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>posted by: {comment.author}</p>
              <p>{comment.body}</p>
              <p className="underline">Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
