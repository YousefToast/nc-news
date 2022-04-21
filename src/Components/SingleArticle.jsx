import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import Comments from "./Comments";
import Votes from "./Votes";
import "../styling/SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticlesById(article_id).then((res) => {
      setArticle(res.article);
    });
  }, [article_id]);

  return (
    <main className="singleArticleWrapper">
      <section className="singleArticle">
        <p>posted by: {article.author}</p>
        <p>{article.topic}</p>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <div className="votesWrapper">
          <Votes
            votes={article.votes}
            article_id={article_id}
            setArticle={setArticle}
            article={article}
          />
        </div>
        <p>Comments: {article.comment_count}</p>
        <p>posted: {article.created_at}</p>
        <hr></hr>
        <Comments article_id={article_id} />
      </section>
    </main>
  );
};

export default SingleArticle;
