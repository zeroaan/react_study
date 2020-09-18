import React, { useRef, useEffect } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => {
    console.log("Hello");
  };
  const title = useClick(sayHello);
  return (
    <div className="container">
      <h1 ref={title}>hi</h1>
    </div>
  );
};

export default App;
