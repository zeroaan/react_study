import React, { Component } from "react";
import Subject from "./components/Subject";
import Control from "./components/Control";
import Nav from "./components/Nav";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import "./App.css";

class App extends Component {
  state = {
    mode: "welcome",
    selected_content_id: 1,
    subject: { title: "WEB", sub: "World Wide Web!" },
    welcome: { title: "Welcome", desc: "Hello, React!!!" },
    contents: [
      { id: 1, title: "HTML", desc: "HTML is for information" },
      { id: 2, title: "CSS", desc: "CSS is for design" },
      { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
    ],
  };
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (title, desc) {
            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.state.contents.length + 1,
              title: title,
              desc: desc,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.state.contents.length + 1,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (id, title, desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === id) {
                _contents[i] = { id: id, title: title, desc: desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />
        <Nav
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        />
        <Control
          onChangeMode={function (mode) {
            if (mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents,
                });
                alert("deleted");
              }
            } else {
              this.setState({ mode: mode });
            }
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
