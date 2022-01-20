import {
  getNewsListStartAction,
  getNewsListErrorAction,
  getNewsListSuccessAction,
  getNewsPopularListSuccessAction,
} from "../actions/getNewsActions";
import { getNewsListRequest, getPopularNewsListRequest } from "../../../services/domain";

export const getNewsListThunk = () => {
  return (dispatch) => {
    dispatch(getNewsListStartAction);
    return getNewsListRequest()
      .then((response) => {
        dispatch(getNewsListSuccessAction(response.articles));
      })
      .catch((error) => {
        dispatch(getNewsListErrorAction(error));
      });
  };
};

export const getPopularNewsListThunk = () => {
  return (dispatch) => {
    dispatch(getNewsListStartAction);
    return getPopularNewsListRequest()
      .then((response) => {
        dispatch(getNewsPopularListSuccessAction(response.articles));
      })
      .catch((error) => {
        dispatch(getNewsListErrorAction(error));
      });
  };
};

// export default getNewsListThunk;