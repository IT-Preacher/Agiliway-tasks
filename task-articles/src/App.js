import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";
import ArticleDetail from "./pages/Articles/ArticleDetail.js";
import SignForm from "./components/SignForm/SignForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />

        <main className="main-semantic">
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/articles" component={Articles} exact></Route>
            <Route path="/articles/:id" component={ArticleDetail} exact></Route>
            <Route path="/statistic" component={Statistic} exact></Route>
            <Route path="/signin" component={SignForm} exact></Route>
            <Route path="/signup" component={SignForm} exact></Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
