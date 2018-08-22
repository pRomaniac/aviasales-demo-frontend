import styled from "styled-components";
import React from "react";
import logo from "./img/logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Route, Router } from "react-router";
import "normalize.css";

import Header from "./Header/header";
import TopDestinations from "./topDestinations/TopDestinations";
import Reklam from "./Reklam/AllReklam";
import Blogs from "./MiniBlogs/Blogs";
import PhonesReklam from "./MiniBlogs/MobileReklam";
import SiteMap from "./MiniBlogs/Listings";
import Footer from "./Footer/Footer";
import SearchCards from "./Search/Cards";

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

/* function Route(props) {
  console.log(props);
  console.log("props");
  console.log(window.location.pathname);
  // есть ли в текущем `pathname` путь, указанный в `props.path`
  // .includes это метод у String, строки
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  if (window.location.pathname.includes(props.path)) {
    // мы не можем сделать <component />,
    // потому что Реакт подумает что это хтмл-тег,
    // поэтому мы воспользуемся React.createElement()
    return React.createElement(props.component, props.properties, null);
  } else return "";
} */

function FirstPage(props) {
  console.log(props);
  return (
    <Container className="FirstPageContainer">
      <Header
        size={props.props.size}
        src={props.props.props.title.src}
        imgtitle={props.props.props.title.imgtitle}
        alt={props.props.props.title.alt}
        className={props.props.props.title.className}
        search={props.search}
      />
      <TopDestinations size={props.props.size} className={"TopDestinations"} />
      <Reklam size={props.props.size} className={"Reklam"} />
      <Blogs size={props.props.size} className={"Blogs"} />
      <PhonesReklam size={props.props.size} className={"PhonesReklam"} />
    </Container>
  );
}

function SearchPage(props) {
  return (
    <Container className={"SearchContainer"}>
      <Header
        size={props.props.size}
        src={props.props.props.title.src}
        imgtitle={props.props.props.title.imgtitle}
        alt={props.props.props.title.alt}
        className={props.props.props.title.className}
        search={props.search}
      />
      <SearchCards size={props.props.size} className={"SearchCards"} />
    </Container>
  );
}

function AppRouter(props) {
  return (
    <Router className="AppRouter">
      <Container className="AppRouterContainer">
        <Route
          exact
          path="/"
          render={() => (
            <FirstPage props={props} className={"FirstPage"} search={false} />
          )}
          className="FirstPageRouter"
        />
        <Route
          path="/Search"
          render={() => (
            <SearchPage props={props} className={"SearchPage"} search={true} />
          )}
          className="SearchPageRouter"
        />
      </Container>
    </Router>
  );
}

class App extends React.Component {
  state = {
    sizing: "desktop"
  };

  ContainerResize() {
    this.setState({ sizing: "mobile" });
    if (document.body.clientWidth >= 768) {
      this.setState({ sizing: "tablet" });
    }
    if (document.body.clientWidth >= 1440) {
      this.setState({ sizing: "desktop" });
    }
    //  this.props["size"] = this.state["sizing"];
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
    if (this.state.sizing) {
      return (
        <Container className={"Contaner"}>
          {/* <Header
          size={this.state.sizing}
          src={props.title.src}
          imgtitle={props.title.imgtitle}
          alt={props.title.alt}
          className={props.title.className}
        />
        {/* <FirstPage size={this.state.sizing} /> 
        {AppRouter}
        <SiteMap size={this.state.sizing} />
        <Footer size={this.state.sizing} /> */}

          <AppRouter
            props={props}
            size={this.state.sizing}
            className="AppRouter"
          />
          <SiteMap size={this.state.sizing} className={"SiteMap"} />
          <Footer size={this.state.sizing} className={"Footer"} />
        </Container>
      );
    } else return "";
  }
}

export default App;
