import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import { Spin, Pagination, Empty, Select } from "antd";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import HeaderNewsContainer from "./components/HeaderNewsContainer/HeaderNewsContainer";
import { StyledNewsConteiner } from "./styled.components";

//Thunks
import ArticleCard from "./components/ArticleConteiner";
import {
  getNewsListThunk,
  newsSortFreshThunk,
  newsSortOldThunk,
} from "../../../Domains/thunks/getNewsThunk";

//Constants
import {
  DEFAULT_MAX_VALUE,
  DEFAULT_MIN_VALUE,
  CURRENT_PAGE,
} from "./components/ArticleConteiner/constants";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const news = useSelector((state) => state.news);
  const { newsList, loading, error } = news;

  const { Option } = Select;

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
    console.log("Search ", value);
    dispatch(getNewsListThunk(value));
  };

  const handleChange = (value) => {
    if (value === "publishedAtUp") {
      dispatch(newsSortFreshThunk(newsList));
    }

    if (value === "publishedAtDown") {
      dispatch(newsSortOldThunk(newsList));
    }
  };

  return (
    <StyledNewsConteiner>
      <h1>News Container</h1>
      <HeaderNewsContainer
        onSearch={onSearch}
        handleChange={handleChange}
        loading={loading}
      />
      <div className="news">
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <React.Fragment>
            <SettingsComponent handleChange={handleChange} />
            <div className="news-articles">
              {newsList.slice(minValue, maxValue).map((article) => {
                return <ArticleCard article={article} key={article.url} />;
              })}
            </div>

            {!newsList.length && <Empty />}

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
