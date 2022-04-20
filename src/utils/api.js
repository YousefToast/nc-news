import axios from "axios";

const myApi = axios.create({
  baseURL: "https://shrel-news.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  const articleUrl = topic ? `articles?topic=${topic}` : "/articles";
  return myApi.get(articleUrl).then((res) => {
    return res.data;
  });
};

export const fetchTopics = () => {
  return myApi.get("/topics").then((res) => {
    return res.data;
  });
};
