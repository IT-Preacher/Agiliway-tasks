import React, { useMemo }from "react";
import propTypes from "prop-types";
import moment from "moment";
import { ArticleContainer } from "./styled.components.js";

const ArticleCard = ({ article }) => {
  const { title, description, publishedAt, url } = article;
  // const dateOfPublish = useMemo(() => moment(publishedAt).format("MMMM Do YYYY"), [article] )
  const style = {
    backgroundImage: `url(${article.urlToImage})`,
  };

  return (
    <ArticleContainer>
      <header style={style}></header>
      <div className="article-body">
        <p className="article-date">
          {moment(publishedAt).format("MMMM Do YYYY")}
          {/* { dateOfPublish } */}
        </p>
        <h2 className="article-title">{title.slice(0, 30)}...</h2>
        <p className="article-content">{description}</p>
      </div>
      <footer>
        <a href={url}>Primary source</a>
      </footer>
    </ArticleContainer>
  );
};

ArticleCard.propTypes = {
  article: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    publishedAt: propTypes.string,
    url: propTypes.string,
    urlToImage: propTypes.string,
  }),
};

export default ArticleCard;
