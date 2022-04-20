import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utils/api";

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
