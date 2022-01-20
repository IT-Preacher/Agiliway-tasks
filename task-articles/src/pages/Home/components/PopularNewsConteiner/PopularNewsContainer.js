import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { getPopularNewsListThunk } from "../../../Domains/thunks/getNewsThunk";
import PopularArticleCard from "./components/PopularArticleCard";
import { PopularNewsCarousel } from "./styled.component";

const PopularNewsContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { popularNewsList, loading, error } = news;

  useEffect(() => {
    dispatch(getPopularNewsListThunk());
  }, []);

  return (
    <PopularNewsCarousel>
      {loading ? (
        <Spin />
      ) : (
        <React.Fragment>
          <h1>Top News</h1>
          {popularNewsList.slice(0, 3).map((articleElement) => {
            return (
              <PopularArticleCard
                article={articleElement}
                key={articleElement.publishedAt}
              />
            );
          })}
        </React.Fragment>
      )}
    </PopularNewsCarousel>
  );
};

export default PopularNewsContainer;
