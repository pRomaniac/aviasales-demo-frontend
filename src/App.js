import styled from "styled-components";
import React, { Component } from "react";
import logo from "./img/logo.svg";
/*import "./App.css"; */
import "normalize.css";

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

class App extends Component {
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
      <Container>
        <Header
          size={props.title.size}
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
