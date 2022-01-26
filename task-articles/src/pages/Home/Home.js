import React, { Component, Suspense } from "react";
import NewsContainer from "./components/NewsContainer";
import PopularNewsContainer from "./components/PopularNewsConteiner";

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
