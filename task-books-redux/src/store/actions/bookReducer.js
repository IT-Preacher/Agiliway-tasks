const initialState = {
    bookItem: {},
    loading: true,
    error: null,
};

export const GET_BOOK = "GET_BOOK";

export const getBookAction = (payload) => ({
  type: GET_BOOK,
  payload
});

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOK :{
            return {loading: false, error: null, bookItem: action.payload}
        }
        default:
            return state;
    }
}

export default bookReducer;