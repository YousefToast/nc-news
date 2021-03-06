import React from "react";
import "../styling/SingleArticle.css";
import { patchVotesById } from "../utils/api";

const Votes = ({ votes, article_id, setArticle, article }) => {
  const handleLike = async (inc) => {
    setArticle({ ...article, votes: votes + inc });
    await patchVotesById(article_id, inc);
  };

  return (
    <div className="voteButton">
      <button onClick={() => handleLike(1)}>Like</button>
      <p>Votes: {votes}</p>
      <button onClick={() => handleLike(-1)}>Dislike</button>
    </div>
  );
};

export default Votes;
