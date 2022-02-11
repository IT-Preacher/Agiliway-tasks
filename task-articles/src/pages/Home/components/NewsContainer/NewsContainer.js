import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import { Spin, Pagination, Empty } from "antd";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import SearchNewsComponent from "./components/SearchNewsComponent/SearchNewsComponent";
import NewsListComponent from "./components/NewsListComponent";
import { StyledNewsConteiner } from "./styled.components";

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
} from "./components/ArticleConteiner/constants";

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

  const onSearch = (value) => {
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
  }

  return (
    <StyledNewsConteiner>
      <h1>News Container</h1>
      <SearchNewsComponent onSearch={onSearch} loading={loading} />
      <div className="news">
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <React.Fragment>
            <SettingsComponent handleChange={handleChangeSorting} />
            <div className="news-articles">
              {/* {newsList.slice(minValue, maxValue).map((article) => {
                return <ArticleCard article={article} key={article.url} />;
              })} */}
              <NewsListComponent
                newsList={newsList}
                minValue={minValue}
                maxValue={maxValue}
              />
            </div>

            {!newsList.length && <Empty />}
              <span onClick={handleLoadMore}>Load more</span>
            <Pagination
              defaultCurrent={CURRENT_PAGE}
              total={newsList.length}
              current={currentPage}
              defaultPageSize={DEFAULT_MAX_VALUE}
              onChange={onChangePagination}
              disabled={loading}
            />
          </React.Fragment>
        )}
      </div>
    </StyledNewsConteiner>
  );
};

export default React.memo(NewsContainer);
