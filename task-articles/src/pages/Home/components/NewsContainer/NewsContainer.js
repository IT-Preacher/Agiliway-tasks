import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import { Spin, Pagination, Empty, message } from "antd";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import SearchNewsComponent from "./components/SearchNewsComponent/SearchNewsComponent";
import NewsListComponent from "./components/NewsListComponent";
import { StyledNewsConteiner, LoadMore } from "./styled.components";

//Thunks
import {
  getNewsListThunk,
  getSearchNewsListThunk,
  newsSortFreshThunk,
  newsSortOldThunk,
} from "../../../Domains/thunks/getNewsThunk";

//Constants
import {
  DEFAULT_MAX_VALUE,
  DEFAULT_MIN_VALUE,
  CURRENT_PAGE,
} from "./constants";

//Reselect
import { createSelector } from "reselect";

const sortedListDateUp = createSelector(
  [(state) => state.newsList],
  (newsList) => {
    console.log("Create selector ", newsList);
    return newsList.sort((a, b) => {
      if (a.publishedAt > b.publishedAt) {
        return -1;
      } else if (a.publishedAt < b.publishedAt) {
        return 1;
      }
      return 0;
    });
  }
);

const NewsContainer = () => {
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const news = useSelector((state) => state.news);
  const { newsList, loading, error } = news;

  useEffect(() => {
    dispatch(getNewsListThunk());
  }, []);

  const onChangePagination = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (pageNumber <= 1) {
      setMinValue(DEFAULT_MIN_VALUE);
      setMaxValue(DEFAULT_MAX_VALUE);
    } else {
      setMinValue((pageNumber - 1) * DEFAULT_MAX_VALUE);
      setMaxValue(pageNumber * DEFAULT_MAX_VALUE);
    }
  };

  const onSearchNews = (value) => {
    dispatch(getSearchNewsListThunk(value));
  };

  const handleChangeSorting = (value) => {
    if (value === "publishedAtUp") {
      //Use selector if the user has selected the latest news (dosen't work)
      return sortedListDateUp(news);
    }

    if (value === "publishedAtDown") {
      dispatch(newsSortOldThunk(newsList));
    }
  };

  const handleLoadMore = () => {
    setMaxValue(maxValue + DEFAULT_MAX_VALUE);
    setCurrentPage(currentPage + CURRENT_PAGE);
  };

  return (
    <StyledNewsConteiner>
      <h1>News Container</h1>
      <SearchNewsComponent onSearch={onSearchNews} loading={loading} />
      <div className="news">
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <React.Fragment>
            <SettingsComponent handleChange={handleChangeSorting} />
            <div className="news-articles">
              <NewsListComponent
                newsList={newsList}
                minValue={minValue}
                maxValue={maxValue}
              />
            </div>

            {Boolean(!newsList.length) && <Empty />}

            {Boolean(newsList.length) && (
              <React.Fragment>
                <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
                <Pagination
                  defaultCurrent={CURRENT_PAGE}
                  total={newsList.length}
                  current={currentPage}
                  defaultPageSize={DEFAULT_MAX_VALUE}
                  onChange={onChangePagination}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      {Boolean(error) && message.error(error)}
    </StyledNewsConteiner>
  );
};

export default React.memo(NewsContainer);
