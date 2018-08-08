import styled from "styled-components";
import React from "react";
import logo from "./img/logo.svg";
/*import "./App.css"; */
import "normalize.css";
//import { ReactElementResize } from "react-element-resize";

import Header from "./Header/header";
import TopDestinations from "./topDestinations/TopDestinations";
import BestPrices from "./Footer/BestPrices";
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
  font-family: "Roboto";
`;

class App extends React.Component {
  state = {
    sizing: ["mobile", "tablet", "desktop"]
  };

  ContainerResize() {
    this.setState({ sizing: "mobile" });
    if (document.body.clientWidth >= 768) {
      this.setState({ sizing: "tablet" });
    }
    if (document.body.clientWidth >= 1440) {
      this.setState({ sizing: "desktop" });
    }
    //console.log(document.body.clientWidth);
  }
  componentDidMount() {
    /*     console.log(this.state.sizing); */
    //console.log(document.body.clientWidth);
    window.addEventListener("load", this.ContainerResize.bind(this));
    window.addEventListener("resize", this.ContainerResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.updateDimensions.bind(this));
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
        <TopDestinations size={this.state.sizing} />
        <BestPrices size={this.state.sizing} />
      </Container>
    );
  }
}

export default App;
