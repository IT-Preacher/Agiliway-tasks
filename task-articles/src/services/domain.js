import client from "./client.js";

export const getArticlesRequest = () => client.get(`/articles/`);
export const getArticleRequest = (id) => client.get(`/articles/${id}`);
export const addArticleRequest = (article) => {
  return client.post("/articles/", article);
};
export const editArticleRequest = (id, article) => {
  return client.put(`/articles/${id}`, article);
};
export const deleteArticleRequest = (id) => {
  return client.delete(`/articles/${id}`);
};
