import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxName = (value) => value.length <= 10;
  const name = useInput("", maxName);
  const password = useInput("");
  return (
    <div className="container">
      <h1>Hello CodeSandbox</h1>
      <div className="loginBox">
        <label htmlFor="id">id: </label>
        <input id="id" placeholder="input name" {...name} />
        <br />
        <label htmlFor="pw">pw: </label>
        <input
          id="pw"
          placeholder="input password"
          type="password"
          {...password}
        />
      </div>
    </div>
  );
};

export default App;
