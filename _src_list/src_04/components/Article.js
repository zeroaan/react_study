import React from "react";

const Article = (props) => {
  return (
    <div>
      <article>
        <h3>{props.title}</h3>
        {props.desc}
      </article>
    </div>
  );
};

export default Article;
