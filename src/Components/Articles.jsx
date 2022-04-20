import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";

const Articles = () => {
  const [articles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((res) => {
      setAllArticles(res.articles);
    });
  }, []);

  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <p>{article.topic}</p>
              <p>{article.author}</p>
              <p>{article.votes}</p>
              <p>{article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
