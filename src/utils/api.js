import axios from "axios";

const myApi = axios.create({
  baseURL: "https://shrel-news.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return myApi
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchTopics = () => {
  return myApi.get("/topics").then((res) => {
    return res.data;
  });
};
