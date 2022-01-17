import React, { Component } from "react";
import phone_1 from "../../img/phone_1.jpg";
import "./Home.scss";
import NewsConteiner from "./components/NewsConteiner";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div>
          <p>
            <span className="title-page">
              Most popular article of the month
            </span>
          </p>
        </div>
        <div className="popular-article">
          <img src={phone_1} alt="article" />
          <div className="article-info">
            <div>
              <p>Description of article</p>
            </div>
            <div>
              <p>article publish date: 12.10.2021</p>
            </div>
          </div>
        </div>
        <NewsConteiner></NewsConteiner>
      </div>
    );
  }
}

export default Home;
