import client from './client.js';

export const getBooks = () => client.get("/books");
export const getBook = (id) => client.get(`/books/${id}`);