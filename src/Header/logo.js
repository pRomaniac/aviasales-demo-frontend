import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import back from "../img/back_arrow.svg";
const SFrom = "Москва";
const STo = "Барселона";
const DateQty = "24 фев — 3 март, 1 пассажир";
const Currensy = "RUB";
const Container = styled.div``;

const SearchParamDiv = styled.div``;
const QtyDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
`;
const FromTODiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;

  color: #ffffff;
`;
const CurrencyDiv = styled.div`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  ${props =>
    !(props.size === "mobile") &&
    css`
      margin-right: 6px;
      margin-top: 6px;
    `};
`;
const CurrencyDivText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  text-align: center;

  color: #ffffff;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding-top: 12px;

  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 96px;
    `};
  ${props =>
    props.size === "desktop" &&
    props.search &&
    css`
      margin-left: 8px;
    `};
  justify-content: space-between;
  align-items: center;
`;

function FromTo(props) {
  return SFrom + " " + STo;
}

const HeaderA = styled.a``;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  ${"" /* ${props =>
    props.size === "mobile" &&
    css`
      padding-right: 6px;
      padding-top: 12px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-right: 8px;
      padding-top: 12px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      padding-right: 98px;
      padding-top: 12px;
    `}; */};
`;

const ImgTitle = styled.div`
  margin-left: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
`;

function LogoRouter(props) {
  return (
    <Router>
      <Container>
        <Route exact path="/" render={() => <Logo props={props} />} />
        <Route path="/Search" render={() => <LogoSearch props={props} />} />
      </Container>
    </Router>
  );
}

function Logo(props) {
  props = props.props;
  if (props.size !== "mobile") {
    return (
      <LogoWrapper size={props.size}>
        <HeaderA size={props.size} href="/">
          <Img
            src={props.src}
            alt={props.alt}
            className={props.className}
            size={props.size}
          />

          <ImgTitle>{props.imgtitle}</ImgTitle>
        </HeaderA>
      </LogoWrapper>
    );
  } else {
    return (
      <LogoWrapper size={props.size}>
        <HeaderA size={props.size} href="/">
          <Img src={props.src} alt={props.alt} className={props.className} />
        </HeaderA>
      </LogoWrapper>
    );
  }
}

function LogoSearch(props) {
  props = props.props;
  if (props.size !== "mobile") {
    return (
      <LogoWrapper size={props.size} search={true}>
        <HeaderA size={props.size} href="/">
          <Img
            src={props.src}
            alt={props.alt}
            className={props.className}
            size={props.size}
          />

          <ImgTitle>{props.imgtitle}</ImgTitle>
        </HeaderA>{" "}
        <CurrencyDiv>
          <CurrencyDivText>{Currensy}</CurrencyDivText>
        </CurrencyDiv>
      </LogoWrapper>
    );
  } else {
    return (
      <LogoWrapper size={props.size}>
        {" "}
        <HeaderA size={props.size} type="search" href="/">
          <Img src={back} alt={props.alt} className={props.className} />{" "}
        </HeaderA>
        <SearchParamDiv size={props.size}>
          <FromTODiv size={props.size}>{FromTo(props)}</FromTODiv>
          <QtyDiv>{DateQty}</QtyDiv>
        </SearchParamDiv>
        <CurrencyDiv>
          <CurrencyDivText>{Currensy}</CurrencyDivText>
        </CurrencyDiv>
      </LogoWrapper>
    );
  }
}

export default LogoRouter;
