import React, { useState, useEffect } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  const [onLine, setonLine] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setonLine(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return onLine;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="container">
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
};

export default App;
