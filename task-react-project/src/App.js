import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/Books/BookDetail.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route 
          path="/" 
          component={Home} 
          exact 
        />

        <Route
          path="/books"
          component={Books}
          exact
        />
        <Route
          path="/books/:id"
          component={BookDetail}
          exact
        ></Route>
      </Switch>
    </div>
  );
}

export default App;