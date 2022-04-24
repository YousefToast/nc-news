import React, { useEffect } from "react";
import { fetchCommentsById } from "../utils/api";
import "../styling/SingleArticle.css";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id, comments, setComments }) => {
  useEffect(() => {
    fetchCommentsById(article_id).then((res) => {
      setComments(res.comments);
    });
  }, [article_id, setComments]);

  return (
    <section>
      <ul className="commentList">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>posted by: {comment.author}</p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <div className="underline">
                <DeleteComment
                  comment_id={comment.comment_id}
                  setComments={setComments}
                  author={comment.author}
                  comments={comments}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
