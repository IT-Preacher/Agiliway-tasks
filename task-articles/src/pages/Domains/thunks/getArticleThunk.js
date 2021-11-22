import {
    getArticleSuccessAction,
    getArticleStartAction,
    getArticleErrorAction,
  } from "../actions/getArticleAction";
  import { getArticleRequest } from "../../../services/domain";
  
  const getArticleThunk = (id) => {
    return (dispatch) => {
      dispatch(getArticleStartAction());
      getArticleRequest(id)
        .then((response) => {
          dispatch(getArticleSuccessAction(response.data));
        })
        .catch((error) => dispatch(getArticleErrorAction(error)));
    };
  };
  
  export default getArticleThunk;