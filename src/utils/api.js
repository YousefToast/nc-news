import axios from "axios";

const myApi = axios.create({
  baseURL: "https://shrel-news.herokuapp.com/api",
});

export const fetchArticles = () => {
  return myApi.get("/articles").then((res) => {
    return res.data;
  });
};
