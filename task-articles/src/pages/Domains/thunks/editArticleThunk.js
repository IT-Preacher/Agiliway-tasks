import {
    edithArticlStartAction,
    edithArticlSuccesstAction,
    edithArticlErrorAction,
  } from "../actions/editArticleAction";
  import { editArticleRequest } from "../../../services/domain.js";
  
  const editArticleThunk = (article) => {
    return (dispatch) => {
      dispatch(edithArticlStartAction());
      editArticleRequest(id, article)
        .then((response) => {
          console.log(response);
          dispatch(edithArticlSuccesstAction());
        })
        .catch((error) => {
          console.error(error);
          dispatch(edithArticlErrorAction(error));
        });
    };
  };
  
  export default editArticleThunk;