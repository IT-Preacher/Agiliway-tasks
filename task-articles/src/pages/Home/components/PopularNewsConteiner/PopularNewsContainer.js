import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularNewsListThunk } from "../../../Domains/thunks/getNewsThunk";
import { getGeolocationRequest } from "../../../../services/domain";

import PopularArticleCard from "./components/PopularArticleCard";
import { PopularNewsCarousel } from "./styled.component";
import { Carousel, Spin } from "antd";

const PopularNewsContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { popularNewsList, loading, error } = news;

  useEffect(() => {
    getGeolocationRequest().then((response) => {
      dispatch(getPopularNewsListThunk(response.data.country_code));
    });
  }, []);

  return (
    <PopularNewsCarousel>
      {loading ? (
        <Spin />
      ) : (
        <React.Fragment>
          <h1>Top News</h1>
          <Carousel autoplay={true} effect={"fade"}>
            {popularNewsList.slice(0, 5).map((articleElement) => {
              return (
                <PopularArticleCard
                  article={articleElement}
                  key={articleElement.publishedAt}
                />
              );
            })}
          </Carousel>
        </React.Fragment>
      )}
    </PopularNewsCarousel>
  );
};

export default PopularNewsContainer;
