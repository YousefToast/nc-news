import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const Topics = ({ topics, setTopics }) => {
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    fetchTopics().then((res) => {
      if (res.isError) {
        setErrorState(res);
      } else {
        setTopics(res.topics);
      }
    });
  }, [setTopics]);

  if (!topics.length && !errorState) return <LoadingPage />;

  if (errorState)
    return (
      <div>
        <ErrorPage err={errorState} />
      </div>
    );

  return (
    <main>
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            <h2>{topic.slug}</h2>
          </Link>
        );
      })}
    </main>
  );
};

export default Topics;
