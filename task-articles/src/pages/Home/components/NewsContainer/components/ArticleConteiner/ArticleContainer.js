import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArticleContainer } from "./styled.components.js";
import moment from "moment";

const ArticleCard = (props) => {
  const { article, onClick } = props;
  const { title, description, publishedAt, url } = article;
  const style = {
    backgroundImage: `url(${article.urlToImage})`,
  };

  return (
    <ArticleContainer onClick={(event) => props.onClick(event)}>
      <header style={style}></header>
      <div className="article-body">
        <p className="article-date">
          {moment(publishedAt).format("MMMM Do YYYY")}
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

export default ArticleCard;
