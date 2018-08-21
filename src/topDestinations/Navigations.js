import React from "react";
import styled, { css } from "styled-components";
//import Router from "react-router";
import AnyWhere from "../img/AnyWhere.svg";
import SunAndBeach from "../img/SunAndBeach.svg";
import CultureAndHistory from "../img/CultureAndHistory.svg";
import ShoppingAndCity from "../img/ShoppingAndCity.svg";
import NightLife from "../img/NightLife.svg";
import VacationWithChildren from "../img/VacationWithChildren.svg";

var awidth;

const NavigatorContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
`;

const NavigatorRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  ${props =>
    props.size === "mobile" &&
    css`
      flex-wrap: wrap;
    `};
`;

const NavigatorPoints = [
  "AnyWhere",
  "SunAndBeach",
  "ShoppingAndCity",
  "CultureAndHistory",
  "NightLife",
  "VacationWithChildren"
];

const NavCategDiv = styled.div`
  max-width: 56px;
  ${"" /*     ${props =>
      props.Clicked === true &&
      css`
        border-bottom: 1px #5c5c5c solid;
      `};} */} ${props =>
    props.size === "mobile" &&
    css`
      flex-basis: 33%;
      margin-left: 20px;
      margin-right: 20px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      flex-basis: 14.33%;
      margin-left: 28px;
      margin-right: 28px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      flex-basis: 8.33%;
      margin-left: 28px;
      margin-right: 28px;
    `};
`;

const NavCategLink = styled.a`
  text-decoration: none;
`;

function NavCategLinkPath(path) {
  if (window.location.pathname.includes(path)) {
    return true;
  } else {
    return false;
  }
}
const NavImg = styled.img`
  margin: auto;
  display: block;
`;
const NavTxt = styled.p`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;

  color: #00ace2;

  ${props =>
    props.Clicked === true &&
    css`
      color: #5c5c5c;
      border-bottom: 1px solid #00ace2;
    `};}
`;

function widthget(src) {
  const Img = new Image();
  Img.src = AnyWhere.toString();
  if (src === "AnyWhere") {
    const Img = new Image();
    Img.src = AnyWhere.toString();
    awidth = Img.width;
  } else if (src === "SunAndBeach") {
    const Img = new Image();
    Img.src = SunAndBeach.toString();
    awidth = Img.width;
  } else if (src === "ShoppingAndCity") {
    const Img = new Image();
    Img.src = ShoppingAndCity.toString();
    awidth = Img.width;
  } else if (src === "CultureAndHistory") {
    const Img = new Image();
    Img.src = CultureAndHistory.toString();
    awidth = Img.width;
    awidth = Img.width;
  } else if (src === "NightLife") {
    const Img = new Image();
    Img.src = NightLife.toString();
    awidth = Img.width;
  } else if (src === "VacationWithChildren") {
    const Img = new Image();
    Img.src = VacationWithChildren.toString();
    awidth = Img.width;
  } else {
    awidth = 0;
  }
  return awidth;
}

function NavImgCateg(props) {
  if (props.Categ === "AnyWhere") {
    awidth = AnyWhere.clientWidth;
    return (
      <NavImg
        className={props.Categ}
        src={AnyWhere}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "SunAndBeach") {
    awidth = SunAndBeach.clientWidth;
    return (
      <NavImg
        className={props.Categ}
        src={SunAndBeach}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "ShoppingAndCity") {
    awidth = ShoppingAndCity.clientWidth;
    return (
      <NavImg
        className={props.Categ}
        src={ShoppingAndCity}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "CultureAndHistory") {
    return (
      <NavImg
        className={props.Categ}
        src={CultureAndHistory}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "NightLife") {
    return (
      <NavImg
        className={props.Categ}
        src={NightLife}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "VacationWithChildren") {
    return (
      <NavImg
        className={props.Categ}
        src={VacationWithChildren}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else return "";
}

function NavTxtCateg(props) {
  if (props.Categ === "AnyWhere") {
    return (
      <NavTxt
        className={props.Categ}
        children="Куда угодно"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "SunAndBeach") {
    return (
      <NavTxt
        children="Солнце и море"
        className={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "ShoppingAndCity") {
    return (
      <NavTxt
        children="Шоппинг, город"
        className={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "CultureAndHistory") {
    return (
      <NavTxt
        children="Культура и история"
        className={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "NightLife") {
    return (
      <NavTxt
        className={props.Categ}
        children="Ночная жизнь"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "VacationWithChildren") {
    return (
      <NavTxt
        children="Отдых с детьми"
        className={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else return "";
}

function NavCateg(props) {
  if (props.Categ === "AnyWhere") {
    return (
      <NavCategDiv
        width={props.awidth}
        size={props.size}
        Categ={props.Categ}
        className={props.Categ}
        path={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      >
        <NavCategLink
          width={props.awidth}
          href={props.Categ}
          size={props.size}
          path={props.Categ}
          className={props.Categ}
          Clicked={NavCategLinkPath(props.Categ)}
        >
          <NavImgCateg
            width={props.awidth}
            size={props.size}
            Categ={props.Categ}
            className={props.Categ}
            path={props.Categ}
            Clicked={NavCategLinkPath(props.Categ)}
          />
          <NavTxtCateg
            width={props.awidth}
            size={props.size}
            Categ={props.Categ}
            className={props.Categ}
            path={props.Categ}
            Clicked={NavCategLinkPath(props.Categ)}
          >
            {props.children}
          </NavTxtCateg>
        </NavCategLink>
      </NavCategDiv>
    );
  } else
    return (
      <NavCategDiv
        size={props.size}
        Categ={props.Categ}
        className={props.Categ}
        path={props.Categ}
        Clicked={NavCategLinkPath(props.Categ)}
      >
        <NavCategLink
          href={props.Categ}
          className={props.Categ}
          size={props.size}
          path={props.Categ}
          Clicked={NavCategLinkPath(props.Categ)}
        >
          <NavImgCateg
            size={props.size}
            Categ={props.Categ}
            className={props.Categ}
            path={props.Categ}
            Clicked={NavCategLinkPath(props.Categ)}
          />
          <NavTxtCateg
            size={props.size}
            Categ={props.Categ}
            className={props.Categ}
            path={props.Categ}
            Clicked={NavCategLinkPath(props.Categ)}
          >
            {props.children}
          </NavTxtCateg>
        </NavCategLink>
      </NavCategDiv>
    );
}

function NavigatorCategories(props) {
  return (
    <NavigatorContainer size={props.size} className="NavigatorContainer">
      <NavigatorRow className="NavigatorRow" size={props.size}>
        {NavigatorPoints.map(Number => (
          <NavCateg
            width={widthget(Number.toString())}
            className={Number.toString()}
            size={props.size}
            key={Number.toString()}
            Categ={Number.toString()}
            /*            path={Number.toString()}
            Clicked={NavCategLinkPath(props.Categ)}*/
          />
        ))}
      </NavigatorRow>
    </NavigatorContainer>
  );
}

export default NavigatorCategories;
