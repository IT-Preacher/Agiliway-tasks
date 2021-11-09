const initialState = {
    bookList: [],
    loading: true,
    error: null,
};

export const GET_BOOKS = "GET_BOOKS";

export const getBooksAction = (payload) => ({
  type: GET_BOOKS,
  payload
});

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS :{
            return {loading: false, error: null, bookList: [...action.payload]}
        }
        default:
            return state;
    }
}

export default booksReducer;