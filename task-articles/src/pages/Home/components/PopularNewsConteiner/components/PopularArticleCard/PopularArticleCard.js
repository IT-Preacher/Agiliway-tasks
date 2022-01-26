import React, { useState } from "react";
import propTypes from "prop-types";
import moment from "moment";
import { DownCircleOutlined } from "@ant-design/icons";
import { PopularArticleContainer } from "../../styled.component";

const PopularArticleCard = ({ article }) => {
  const [visible, setVisible] = useState(false);
  const { title, description, publishedAt, urlToImage, content, author } =
    article;
  const style = {
    backgroundImage: `url(${urlToImage})`,
    backgroundSize: "cover",
  };

  const handleClickMore = () => {
    setVisible(!visible);
  };

  return (
    <PopularArticleContainer style={style}>
      <div className="blure-background-layer">
        <section>
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <p>
              {description}{" "}
              {content && (
                <span onClick={handleClickMore} id={"show-more"}>
                  More <DownCircleOutlined />
                </span>
              )}
            </p>
            {visible && <div className="article-main-text">{content}</div>}
          </main>
          <footer>
            <span>Author: {author === null ? "Anonymous" : author}</span>{" "}
            <span>at {moment(publishedAt).format("MMMM Do YYYY")}</span>
          </footer>
        </section>
      </div>
    </PopularArticleContainer>
  );
};

PopularArticleCard.propTypes = {
  article: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    publishedAt: propTypes.string,
    url: propTypes.string,
    urlToImage: propTypes.string,
    content: propTypes.string,
    author: propTypes.string,
  }),
};

export default PopularArticleCard;
