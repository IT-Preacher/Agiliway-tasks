import { Switch, Route } from "react-router-dom";

//Styled components
import {
  AppContainer,
  Wrapper,
  MainSemanticContainer,
} from "./styled.components";

//Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";
import ArticleDetail from "./pages/Articles/ArticleDetail.js";
import SignUpForm from "./components/SignForms/SignUpForm";
import SignInForm from "./components/SignForms/SignInForm";
import Page404 from "./pages/Page404";

function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Navigation />

        <MainSemanticContainer>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/articles" component={Articles} exact></Route>
            <Route path="/articles/:id" component={ArticleDetail} exact></Route>
            <Route path="/statistic" component={Statistic} exact></Route>
            <Route path="/signin" component={SignInForm} exact></Route>
            <Route path="/signup" component={SignUpForm} exact></Route>
            <Route path="*" component={Page404} exact></Route>
          </Switch>
        </MainSemanticContainer>

        <Footer />
      </Wrapper>
    </AppContainer>
  );
}

export default App;
