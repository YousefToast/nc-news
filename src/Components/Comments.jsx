import React, { useEffect, useState } from "react";
import { fetchCommentsById } from "../utils/api";
import "../styling/SingleArticle.css";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsById(article_id).then((res) => {
      setComments(res.comments);
    });
  }, [article_id]);

  return (
    <section>
      <ul className="commentList">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>posted by: {comment.author}</p>
              <p>{comment.body}</p>
              <p className="underline">Votes: {comment.votes}</p>
              <DeleteComment
                comment_id={comment.comment_id}
                setComments={setComments}
                author={comment.author}
                comments={comments}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
