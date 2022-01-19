import {
  getNewsListStartAction,
  getNewsListErrorAction,
  getNewsListSuccessAction,
} from "../actions/getNewsActions";
import { getNewsListRequest } from "../../../services/domain";

const getNewsListThunk = () => {
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

export default getNewsListThunk;
