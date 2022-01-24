import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Pagination, Empty, Input } from "antd";
import { getNewsListThunk } from "../../../Domains/thunks/getNewsThunk";
import ArticleCard from "./components/ArticleConteiner";
import {
  StyledNewsConteiner,
  StyledHeaderConteiner,
} from "./styled.components";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12);
  const [currentPage, setcurrentPage] = useState(1);
  const news = useSelector((state) => state.news);
  const { newsList, loading, error } = news;

  useEffect(() => {
    dispatch(getNewsListThunk());
  }, []);

  const onChangePagination = (pageNumber) => {
    setcurrentPage(pageNumber);

    if (pageNumber <= 1) {
      setMinValue(0);
      setMaxValue(12);
    } else {
      setMinValue(maxValue);
      setMaxValue(pageNumber * 12);
    }
  };

  const onSearch = (value) => {
    dispatch(getNewsListThunk(value));
  }

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
              defaultCurrent={1}
              total={newsList.length}
              current={currentPage}
              defaultPageSize={12}
              onChange={onChangePagination}
              disabled={loading}
            />
          </React.Fragment>
        )}
      </div>
    </StyledNewsConteiner>
  );
};

export default NewsContainer;
