import {
  getArticlesSuccessAction,
  getArticlesStartAction,
  getArticlesErrorAction,
} from "../actions/getArticlesAction";
import { getArticlesRequest } from "../../../services/domain";

const getArticlesThunk = () => {
  return (dispatch) => {
    dispatch(getArticlesStartAction());
    return getArticlesRequest()
      .then((response) => {
        dispatch(getArticlesSuccessAction(response.data.data));
      })
      .catch((error) => dispatch(getArticlesErrorAction(error)));
  };
};

export default getArticlesThunk;
