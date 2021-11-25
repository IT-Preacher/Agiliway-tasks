import client from "./client.js";

export const getArticlesRequest = () => client.get(`/articles/`);
//Request for Saga
export const getArticlesRequestSaga = () => client.get(`/articles/`).then(response => response.data.data);

export const getArticleRequest = (id) => client.get(`/articles/${id}`);
//Request for Saga
export const getArticleRequestSaga = (id) => client.get(`/articles/${id}`).then(response => response.data);

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
