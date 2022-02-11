import React from "react";
import ArticleCard from "../ArticleConteiner/ArticleCard";

const NewsListComponent = ({ newsList, minValue, maxValue }) => {
  return (
    <React.Fragment>
      {newsList.slice(minValue, maxValue).map((article) => {
        return <ArticleCard article={article} key={article.url} />;
      })}
    </React.Fragment>
  );
};

export default NewsListComponent;
