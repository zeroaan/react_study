import React, { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 3000);
  return (
    <div className="container">
      <h1>3초 뒤에 title이 바뀜</h1>
    </div>
  );
};

export default App;
