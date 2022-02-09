import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";
import ArticleDetail from "./pages/Articles/ArticleDetail.js";
// import SignForm from "./components/SignForm/SignForm";
import Page404 from "./pages/Page404";
import SignUpForm from "./components/SignForm/SignUpForm/SignUpForm";
import SignInForm from "./components/SignForm/SignInForm/SignInForm";

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
            <Route path="/signin" component={SignInForm} exact></Route>
            <Route path="/signup" component={SignUpForm} exact></Route>
            <Route path="*" component={Page404} exact></Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
