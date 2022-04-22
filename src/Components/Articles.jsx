import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import "../styling/articles.css";

const Articles = () => {
  const [articles, setAllArticles] = useState([]);
  const [sort_by, setSort_By] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const limit = 10;
  const [p, setP] = useState(1);
  const queries = `?sort_by=${sort_by}&&order=${order}&&limit=${limit}&&p=${p}`;

  useEffect(() => {
    fetchArticles(queries).then((res) => {
      setAllArticles(res.articles);
    });
  }, [queries]);

  return (
    <main>
      <select
        onChange={(e) => {
          setSort_By(e.target.value);
        }}
      >
        <option>created_at</option>
        <option>votes</option>
        <option>author</option>
      </select>
      <select
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >
        <option>desc</option>
        <option>asc</option>
      </select>
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
      <button
        onClick={() => {
          setP((currP) => {
            return currP + 1;
          });
        }}
      >
        Next Page
      </button>
    </main>
  );
};

export default Articles;
