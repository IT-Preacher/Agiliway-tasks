import {
  getNewsListStartAction,
  getNewsListErrorAction,
  getNewsListSuccessAction,
  getNewsPopularListSuccessAction,
  newsSortFreshAction,
  newsSortOldAction,
} from "../actions/getNewsActions";
import {
  getNewsListRequest,
  getPopularNewsListRequest,
} from "../../../services/domain";

export const getNewsListThunk = (query) => {
  return (dispatch) => {
    dispatch(getNewsListStartAction);
    console.log("Thunk ", query);
    return getNewsListRequest(query)
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

export const newsSortFreshThunk = (newsList) => {
  return (dispatch) => {
    const sortedList = [...newsList].sort((a, b) => {
      if (a.publishedAt > b.publishedAt) {
        return -1;
      } else if (a.publishedAt < b.publishedAt) {
        return 1;
      }
      return 0;
    });

    try {
      dispatch(getNewsListStartAction());
      dispatch(newsSortFreshAction(sortedList));
    } catch (error) {
      dispatch(getNewsListErrorAction(error));
    }
  };
};

export const newsSortOldThunk = (newsList) => {
  return (dispatch) => {
    const sortedList = [...newsList].sort((a, b) => {
      if (a.publishedAt > b.publishedAt) {
        return 1;
      } else if (a.publishedAt < b.publishedAt) {
        return -1;
      }
      return 0;
    });

    try {
      dispatch(getNewsListStartAction());
      dispatch(newsSortOldAction(sortedList));
    } catch (error) {
      dispatch(getNewsListErrorAction(error));
    }
  };
};
