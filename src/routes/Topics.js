import React from "react";
import { Route, NavLink, useParams } from "react-router-dom";

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

export default Topics;
