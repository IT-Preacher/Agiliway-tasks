import React from "react";
import { Link } from "react-router-dom";
import "./ArticleContainer.scss";
import moment from "moment";

const ArticleContainer = (props) => {
    const { article } = props;
    const style = {
        backgroundImage: `url(${article.urlToImage})`,
    }
  return (
    <div className="article_container">
      <header style={style}>
        {/* <h4>NEWS</h4> */}
      </header>
      <div className="article_body">
        <p>{moment(article.publishedAt).format("MMMM Do YYYY")}</p>
        <h2 className="article_title">{article.title.slice(0, 30)}...</h2>
        <p className="article_content">{article.description}</p>
      </div>
      <footer>
        <Link to="#">Find out more</Link>
      </footer>
    </div>
  );
};

export default ArticleContainer;
