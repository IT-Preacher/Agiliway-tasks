import {
  getNewsListStartAction,
  getNewsListErrorAction,
  getNewsListSuccessAction,
} from "../actions/getNewsActions";
import { getNewsListRequest } from "../../../services/domain";

const getNewsListThunk = () => {
  console.log("Thunk start");
  return (dispatch) => {
    console.log("Thunk 1");
    dispatch(getNewsListStartAction);
    return getNewsListRequest()
      .then((response) => {
        console.log("Thunk 2", response);
        dispatch(getNewsListSuccessAction(response.articles));
      })
      .catch((error) => {
          console.log("thunk erro ", error)
        dispatch(getNewsListErrorAction(error));
      });
  };
};

export default getNewsListThunk;
