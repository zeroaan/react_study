import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import Topics from "./routes/Topics";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Router DOM example</h1>
      <div className="nav">
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/contact" component={Contact} />
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
