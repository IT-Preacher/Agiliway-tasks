import "./App.css";
import FormRegistration from "./components/FormRegistration";
import Todo from "./components/TodoComponent";
import FinalForm from "./components/FinalForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/todoTask" component={Todo} exact />
        <Route path="/formRegTask" component={FormRegistration} />
        <Route path="/finalFormRegTask" component={FinalForm} />
      </Switch>
    </div>
  );
}

export default App;
