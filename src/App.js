import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const plusData = () => {
    setData((prevData) => {
      return prevData + 1;
    });
  };
  const minusData = () => {
    setData((prevData) => {
      return prevData - 1;
    });
  };
  const resetData = () => {
    setData(0);
  };
  return (
    <div className="container">
      <h1>hello</h1>
      <h3>{data}</h3>
      <button onClick={plusData}>Plus</button>
      <button onClick={minusData}>Minus</button>
      <button onClick={resetData}>Reset</button>
    </div>
  );
}

export default App;
