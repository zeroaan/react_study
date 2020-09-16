import React, { Component } from "react";

class Subject extends Component {
  render() {
    const { title, sub } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {title}
          </a>
        </h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Subject;
