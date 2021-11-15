import client from "./client.js";

export const getArticlesRequest = () => client.get(`/articles/`);
export const getArticleRequest = (id) => client.get(`/articles/${id}`);
export const addArticleRequest = (article) => {
  return client.post("/articles/", article);
};
export const editArticleRequest = (id, article) => {
  return client.patch(`/articles/${id}`, article);
};
// export const postArticlesRequest = () =>
//   client.post(`/articles/`, {
//     name: "string",
//     author: "string",
//     description: "string",
//   });
// export const getArticles = () => client.get(`/articles/`);
