import React, { Component } from "react";
import phone_1 from "../../img/phone_1.jpg";
import "./Home.scss";
import NewsContainer from "./components/NewsContainer";
import PopularNewsContainer from "./components/PopularNewsConteiner";
import PopularNewsConteiner from "./components/PopularNewsConteiner";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <PopularNewsContainer />
        <NewsContainer />
      </div>
    );
  }
}

export default Home;
