import React, { useState } from "react";
import moment from "moment";
import { DownCircleOutlined } from "@ant-design/icons";

const PopularArticleCard = ({ article }) => {
  console.log("popular card ", article);
  const [visible, setVisible] = useState(false);
  const { title, description, publishedAt, urlToImage, content, author, url } =
    article;
  const style = {
    backgroundImage: `url(${urlToImage})`,
    backgroundSize: "cover",
  };

  const handleClickMore = (event) => {
    setVisible(!visible);
    //alert(visible);
    console.log(content);
  };

  return (
    <div style={style} className="popular-article-card-container">
      <div className="blure-background-layer">
        <section>
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <p>
              {description}{" "}
              {content !== null && <span onClick={handleClickMore} id={"show-more"}>More <DownCircleOutlined /></span>}
            </p>
            {visible && <div className="article-main-text">{content}</div>}
          </main>
          <footer>
            <span>Author: {author === null ? "Anonymous" : author}</span>{" "}
            <span>at {moment(publishedAt).format("MMMM Do YYYY")}</span>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default PopularArticleCard;
