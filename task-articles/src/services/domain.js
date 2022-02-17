import client from "./client.js";
import newsAPI from "./newsAPI.js";

/* Request to local server */

export const getArticlesRequest = () => client.get(`/articles/`);
//Request for Saga
export const getArticlesRequestSaga = () =>
  client.get(`/articles/`).then((response) => response.data.data);

export const getArticleRequest = (id) => client.get(`/articles/${id}`);
//Request for Saga
export const getArticleRequestSaga = (id) =>
  client.get(`/articles/${id}`).then((response) => response.data);

export const addArticleRequest = (article) => {
  return client.post("/articles/", article);
};
//Request for Saga
export const addArticleRequestSaga = (article) => {
  return client.post("/articles/", article);
};

export const editArticleRequest = (id, article) => {
  return client.put(`/articles/${id}`, article);
};
//Request for Saga
export const editArticleRequestSaga = (id, article) => {
  return client.put(`/articles/${id}`, article);
};

export const deleteArticleRequest = (id) => {
  return client.delete(`/articles/${id}`);
};
//Request for Saga
export const deleteArticleRequestSaga = (id) => {
  return client.delete(`/articles/${id}`);
};

/* News API request */
//Request to get news
export const getNewsListRequest = () =>
  newsAPI
    .get(`/v2/everything?q=${null}&pageSize=40&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then((response) => response.data);

//Search news with params
export const getSearchNewsListRequest = (queryParams) => {
  const params = { ...queryParams, apiKey: process.env.REACT_APP_NEWS_API_KEY };

  return newsAPI
    .get(`/v2/everything`, { params })
    .then((response) => response.data);
};

//Request to get popular news
export const getPopularNewsListRequest = () =>
  newsAPI
    .get(`/v2/top-headlines?country=ua&category=general&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then((response) => response.data);
