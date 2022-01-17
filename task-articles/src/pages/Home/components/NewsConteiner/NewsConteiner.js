import React, { useEffect } from "react";
//import { getNewsListStartAction } from "../../../Domains/actions/getNewsActions";
import { useSelector, useDispatch } from "react-redux";
import getArticlesThunk from "../../../Domains/thunks/getNewsThunk";
import { Spin } from "antd";

const NewsConteiner = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const { newsList, loading, error } = news;

  console.log("News Conteiner ", newsList);

  useEffect(() => {
    //dispatch(getNewsListStartAction());
    dispatch(getArticlesThunk());
  }, []);

  return (
    <div>
      <h1>News Conteiner</h1>
      <div className="news_conteiner">
      {loading ? (
            <Spin style={{ fontSize: 36 }} />
          ) : (
            <h1>Done</h1>
          )}
      </div>
    </div>
  );
};

export default NewsConteiner;
