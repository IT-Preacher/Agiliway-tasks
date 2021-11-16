import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";
import ArticleDetail from "./pages/Articles/ArticleDetail.js";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Navigation />

        <main className="main-semantic">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/articles" exact>
              <Articles />
            </Route>
            <Route path="/articles/:id" exact component={ArticleDetail}>
            </Route>
            <Route path="/statistic" exact>
              <Statistic />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;