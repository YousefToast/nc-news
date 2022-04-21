import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import AddComment from "./AddComment";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticlesById(article_id).then((res) => {
      setArticle(res.article);
    });
  });

  return (
    <main className="singleArticleWrapper">
      <section className="singleArticle">
        <p>posted by: {article.author}</p>
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{article.body}</p>

        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <p>posted: {article.created_at}</p>
        <hr></hr>
        <AddComment article_id={article_id} />
        <Comments article_id={article_id} />
      </section>
    </main>
  );
};

export default SingleArticle;
