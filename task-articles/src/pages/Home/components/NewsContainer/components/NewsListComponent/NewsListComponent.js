import React from "react";
import propTypes from "prop-types";
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

NewsListComponent.propTypes = {
  newsList: propTypes.array.isRequired,
  minValue: propTypes.number.isRequired,
  maxValue: propTypes.number.isRequired,
};

export default React.memo(NewsListComponent);
