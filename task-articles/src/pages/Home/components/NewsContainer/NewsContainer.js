import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getArticlesThunk from "../../../Domains/thunks/getNewsThunk";
import { Spin } from "antd";
import ArticleContainer from "./components/ArticleConteiner";
import "./NewsContainer.scss";

const NewsContainer = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const { newsList, loading, error } = news;

  console.log("News Conteiner ", newsList);

  useEffect(() => {
    dispatch(getArticlesThunk());
  }, []);

  return (
    <div className="news-container">
      <h1>News Container</h1>
      <div className="news">
        {loading ? (
          <Spin style={{ fontSize: 36 }} />
        ) : (
          <div className="news-articles">
            {newsList.map((article) => {
              return <ArticleContainer article={article} key={article.url} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsContainer;
