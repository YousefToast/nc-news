import axios from "axios";

const myApi = axios.create({
  baseURL: "https://shrel-news.herokuapp.com/api",
});

export const fetchArticles = (queries) => {
  return myApi
    .get(`/articles${queries}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { ...err, isError: true };
    });
};

export const fetchTopics = () => {
  return myApi
    .get("/topics")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { ...err, isError: true };
    });
};

export const fetchArticlesById = (article_id) => {
  return myApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { ...err, isError: true };
    });
};
//err.response.status
//return { err: true };
//err.response.data.msg
export const fetchCommentsById = (article_id) => {
  return myApi
    .get(`articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { ...err, isError: true };
    });
};

export const addCommentById = (article_id, body, username) => {
  return myApi
    .post(`articles/${article_id}/comments`, { body, username })
    .catch((err) => {
      return { ...err, isError: true };
    });
};

export const patchVotesById = (article_id, inc) => {
  return myApi
    .patch(`articles/${article_id}`, { inc_votes: inc })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { ...err, isError: true };
    });
};

export const deleteComment = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).catch((err) => {
    return { ...err, isError: true };
  });
};
