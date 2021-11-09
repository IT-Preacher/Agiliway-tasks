import client from './client.js';

export const getBook = (id) => client.get(`/books/${id}`);