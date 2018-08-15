import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./title";
import Logo from "./logo";
import SearchField from "./search";

const Container = styled.div``;

const HeaderDiv = styled.div`
  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  ${props =>
    props.size === "mobile" &&
    !props.search &&
    css`
      padding-bottom: 88px;
    `};
  ${props =>
    props.size === "tablet" &&
    !props.search &&
    css`
      padding-bottom: 122px;
    `};
  ${props =>
    props.size === "desktop" &&
    !props.search &&
    css`
      padding-bottom: 254px;
    `};
  ${props =>
    (props.size === "mobile") & props.search &&
    css`
      padding-left: 6px;
      padding-right: 6px;
      padding-bottom: 10px;
    `};
  ${props =>
    props.size === "tablet" &&
    props.search &&
    css`
      padding-bottom: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    props.search &&
    css`
      padding-bottom: 8px;
    `};
`;
function HeaderRouter(props) {
  return (
    <Router>
      <Container>
        <Route exact path="/" render={() => <FirstPage props={props} />} />
        <Route path="/Search" render={() => <SearchPage props={props} />} />
      </Container>
    </Router>
  );
}

function FirstPage(props) {
  props = props.props;
  return (
    <HeaderDiv size={props.size}>
      <Logo
        size={props.size}
        src={props.src}
        alt={props.alt}
        imgtitle={props.imgtitle}
        className={props.className}
      />
      <Title size={props.size} />
      <SearchField size={props.size} />
    </HeaderDiv>
  );
}

function SearchFieldSizing(props) {
  if (props.size === "mobile") {
    return "";
  } else return <SearchField size={props.size} />;
}

function SearchPage(props) {
  props = props.props;
  return (
    <HeaderDiv size={props.size} search={true}>
      <Logo
        size={props.size}
        src={props.src}
        alt={props.alt}
        imgtitle={props.imgtitle}
        className={props.className}
      />
      {SearchFieldSizing(props)}
    </HeaderDiv>
  );
}

export default HeaderRouter;
