import styled from "styled-components";
import React from "react";
import logo from "./img/logo.svg";
/*import "./App.css"; */
import "normalize.css";
//import { ReactElementResize } from "react-element-resize";

import Header from "./header";
const props = {
  title: {
    size: "mobile",
    src: logo,
    className: "classImg",
    alt: "first",
    imgtitle: "aviasales"
  }
};

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

class App extends React.Component {
  state = {
    sizing: ["mobile", "tablet", "desktop"]
  };

  componentDidMount() {
    /*     console.log(this.state.sizing); */
    console.log(document.body.clientWidth);

    window.addEventListener("resize", this.ContainerResize(this));
  }
  ContainerResize() {
    this.setState({ sizing: "mobile" });
    if (document.body.clientWidth >= 768) {
      this.setState({ sizing: "tablet" });
    }
    if (document.body.clientWidth >= 1440) {
      this.setState({ sizing: "desktop" });
    }
  }

  render() {
    /*     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    ); */

    return (
      <Container className={"Contaner"}>
        <Header
          size={this.state.sizing}
          src={props.title.src}
          imgtitle={props.title.imgtitle}
          alt={props.title.alt}
          className={props.title.className}
        />
      </Container>
    );
  }
}

export default App;
