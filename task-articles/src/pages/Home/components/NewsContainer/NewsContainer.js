import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components 
import { Spin, Pagination, Empty, Input } from "antd";
import { getNewsListThunk } from "../../../Domains/thunks/getNewsThunk";
import {
  StyledNewsConteiner,
  StyledHeaderConteiner,
} from "./styled.components";

//Thunks
import ArticleCard from "./components/ArticleConteiner";

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
    dispatch(getNewsListThunk(value));
  };

  return (
    <StyledNewsConteiner>
      <h1>News Container</h1>
      <StyledHeaderConteiner>
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          loading={loading}
          onSearch={onSearch}
        />
      </StyledHeaderConteiner>
      <div className="news">
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <React.Fragment>
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
