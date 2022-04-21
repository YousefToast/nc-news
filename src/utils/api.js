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

export const fetchArticlesById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchCommentsById = (article_id) => {
  return myApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchLikesById = (article_id, inc) => {
  return myApi
    .patch(`articles/${article_id}`, { inc_votes: inc })
    .then((res) => {
      return res.data;
    });
};
