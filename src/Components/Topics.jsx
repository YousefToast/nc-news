import { useEffect } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = ({ topics, setTopics }) => {
  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res.topics);
    });
  });

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
