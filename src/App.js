import React, { Component, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Function, Class</h1>
      <FuncComp initNumber={3} />
      <ClassComp initNumber={3} />
    </div>
  );
}

const FuncComp = (props) => {
  const numberState = useState(props.initNumber);
  const _number = numberState[0];
  const setNumber = numberState[1];

  // const dateState = useState(new Date().toString());
  // const _date = dateState[0];
  // const setDate = dateState[1];

  const [_date, setDate] = useState(new Date().toString());

  return (
    <div className="container">
      <h2>FuncComp</h2>
      <p>Number: {_number}</p>
      <p>Date: {_date}</p>
      <input
        type="button"
        value="change date"
        onClick={function () {
          setNumber(Math.round(Math.random() * 100));
        }}
      />
      <input
        type="button"
        value="change date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
};

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  render() {
    return (
      <div className="container">
        <h2>ClassComp</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="change number"
          onClick={function () {
            this.setState({ number: Math.round(Math.random() * 100) });
          }.bind(this)}
        />
        <input
          type="button"
          value="change date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        />
      </div>
    );
  }
}

export default App;
