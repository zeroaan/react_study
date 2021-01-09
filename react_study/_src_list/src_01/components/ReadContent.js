import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    );
  }
}

export default ReadContent;
