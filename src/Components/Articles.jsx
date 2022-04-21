import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import "../styling/articles.css";

const Articles = () => {
  const [articles, setAllArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic).then((res) => {
      setAllArticles(res.articles);
    });
  }, [topic]);

  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articles">
              <div className="wrapper">
                <p>
                  <span className="postedBy">posted by:</span> {article.author}
                </p>
                <p className="topic">{article.topic}</p>
              </div>

              <Link to={`/articles/${article.article_id}`}>
                <h3 className="title">{article.title}</h3>
              </Link>
              <div className="wrapper likeWrapper">
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
