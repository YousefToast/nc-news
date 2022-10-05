import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import ErrorPage from "./ErrorPage";
import "../styling/articles.css";
import LoadingPage from "./LoadingPage";
import { Button, Chip, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setAllArticles] = useState([]);
  const [sort_by, setSort_By] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const limit = 10;
  const [p, setP] = useState(1);
  const [errorState, setErrorState] = useState(false);
  const queries = `?sort_by=${sort_by}&&order=${order}&&limit=${limit}&&p=${p}`;

  let navigate = useNavigate();

  useEffect(() => {
    fetchArticles(queries).then((res) => {
      if (res.isError) {
        setErrorState(res);
      } else {
        setAllArticles(res.articles);
        setIsLoading(false);
      }
    });
  }, [queries]);

  if (isLoading) return <LoadingPage />;

  if (errorState)
    return (
      <div>
        <ErrorPage err={errorState} />
      </div>
    );

  return (
    <main className="articles-wrap">
      <div className="sortBy-wrap">
        <h4>Sort By:</h4>
        <select
          className="filters"
          onChange={(e) => {
            setSort_By(e.target.value);
          }}
          value={sort_by}
        >
          <option>created_at</option>
          <option>votes</option>
          <option>author</option>
          <option>comment_count</option>
        </select>
        <select
          className="filters"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          value={order}
        >
          <option>desc</option>
          <option>asc</option>
        </select>
      </div>
      <ul>
        {articles.map((article) => {
          return (
            <li
              key={article.article_id}
              className="articles"
              onClick={() => {
                navigate(`${article.article_id}`);
              }}
            >
              <div className="wrapper">
                <p>
                  <span className="postedBy">posted by:</span> {article.author}
                </p>
                <p className="topic">{article.topic}</p>
              </div>

              <h3 className="title">{article.title}</h3>
              <div className="wrapper likeWrapper">
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <Chip
        label="Previous Page"
        onClick={() => {
          setP((currP) => {
            return currP - 1;
          });
        }}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
        }}
        size="small"
        clickable
      /> */}
      <div className="articlePageButton">
        <Button
          variant="contained"
          onClick={() => {
            setP((currP) => {
              return currP - 1;
            });
          }}
        >
          Previous Page
        </Button>
        <Avatar>{p}</Avatar>
        <Button
          variant="contained"
          onClick={() => {
            setP((currP) => {
              return currP + 1;
            });
          }}
        >
          Next Page
        </Button>
      </div>
    </main>
  );
};

export default Articles;
