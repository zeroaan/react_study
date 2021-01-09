import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Article from "./components/Article";

const NowLoading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

function App() {
  const articleState = {
    item: { title: "Welcome", desc: "Hello, React & Ajax" },
    isLoading: false,
  };
  const [article, setArticle] = useState(articleState);

  const listState = { items: [], isLoading: false };
  const [list, setList] = useState(listState);
  useEffect(function () {
    const newList = Object.assign({}, list.items, { isLoading: true });
    setList(newList);
    fetch("list.json")
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        setList({ items: json, isLoading: false });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let NavTag = null;
  if (list.isLoading) {
    NavTag = <NowLoading />;
  } else {
    NavTag = (
      <Nav
        list={list.items}
        onClick={(id) => {
          const newArticle = Object.assign({}, article.item, {
            isLoading: true,
          });
          setArticle(newArticle);
          fetch(id + ".json")
            .then(function (result) {
              return result.json();
            })
            .then(function (json) {
              setArticle({ item: json, isLoading: false });
            }, []);
        }}
      />
    );
  }

  let ArticleTag = null;
  if (article.isLoading) {
    ArticleTag = <NowLoading />;
  } else {
    ArticleTag = (
      <Article title={article.item.title} desc={article.item.desc} />
    );
  }

  return (
    <div className="container">
      <h1>WEB</h1>
      {NavTag}
      {ArticleTag}
    </div>
  );
}

export default App;
