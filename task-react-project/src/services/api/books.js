import client from './client.js';

export const getBooks = () => client.get("/Books");
export const getBook = (id) => client.get(`/books/${id}`);