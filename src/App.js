import React from "react";
import "./App.css";
import { Switch, Route, NavLink, useParams } from "react-router-dom";

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

const Home = (props) => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
};

let contents = [
  { id: 1, title: "HTML", desc: "HTML is ..." },
  { id: 2, title: "JS", desc: "JS is ..." },
  { id: 3, title: "REACT", desc: "REACT is ..." },
];
const Topic = (props) => {
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: "Sorry",
    desc: "Not found",
  };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  );
};
const Topics = (props) => {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id" component={Topic} />
    </div>
  );
};
const Contact = (props) => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
};

export default App;
