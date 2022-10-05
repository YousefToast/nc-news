import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import Comments from "./Comments";
import Votes from "./Votes";
import "../styling/SingleArticle.css";
import AddComment from "./AddComment";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const SingleArticle = () => {
  const [article, setArticle] = useState(false);
  const [comments, setComments] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticlesById(article_id).then((res) => {
      if (res.isError) {
        setErrorState(res);
      } else {
        setArticle(res.article);
      }
    });
  }, [article_id, setComments]);

  if (!article && !errorState) return <LoadingPage />;

  if (errorState)
    return (
      <div>
        <ErrorPage err={errorState} />
      </div>
    );

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
        <p>posted: {article.created_at.slice(0, 10)}</p>
        <hr></hr>
        <AddComment
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
        <Comments
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </section>
    </main>
  );
};

export default SingleArticle;
