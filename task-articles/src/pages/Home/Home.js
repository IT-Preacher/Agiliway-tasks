import React, { Suspense } from "react";
import NewsContainer from "./components/NewsContainer";
import PopularNewsContainer from "./components/PopularNewsConteiner";

const Home = () => {
  return (
    <div className="home-page">
      <PopularNewsContainer />
      <NewsContainer />
    </div>
  );
};

export default Home;
