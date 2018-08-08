import React from "react";
import styled, { css } from "styled-components";
//import Router from "react-router";
import AnyWhere from "../img/AnyWhere.svg";
import SunAndBeach from "../img/SunAndBeach.svg";
import CultureAndHistory from "../img/CultureAndHistory.svg";
import ShoppingAndCity from "../img/ShoppingAndCity.svg";
import NightLife from "../img/NightLife.svg";
import VacationWithChildren from "../img/VacationWithChildren.svg";

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
  ${"" /*     ${props =>
      props.Clicked === true &&
      css`
        border-bottom: 1px #5c5c5c solid;
      `};} */} ${props =>
    props.size === "mobile" &&
    css`
      flex-basis: 33%;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      flex-basis: 14.33%;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      flex-basis: 8.33%;
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

function NavImgCateg(props) {
  if (props.Categ === "AnyWhere") {
    return <NavImg src={AnyWhere} Clicked={NavCategLinkPath(props.Categ)} />;
  } else if (props.Categ === "SunAndBeach") {
    return <NavImg src={SunAndBeach} Clicked={NavCategLinkPath(props.Categ)} />;
  } else if (props.Categ === "ShoppingAndCity") {
    return (
      <NavImg src={ShoppingAndCity} Clicked={NavCategLinkPath(props.Categ)} />
    );
  } else if (props.Categ === "CultureAndHistory") {
    return (
      <NavImg src={CultureAndHistory} Clicked={NavCategLinkPath(props.Categ)} />
    );
  } else if (props.Categ === "NightLife") {
    return <NavImg src={NightLife} Clicked={NavCategLinkPath(props.Categ)} />;
  } else if (props.Categ === "VacationWithChildren") {
    return (
      <NavImg
        src={VacationWithChildren}
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else return "";
}

function NavTxtCateg(props) {
  if (props.Categ === "AnyWhere") {
    return (
      <NavTxt children="Куда угодно" Clicked={NavCategLinkPath(props.Categ)} />
    );
  } else if (props.Categ === "SunAndBeach") {
    return (
      <NavTxt
        children="Солнце и море"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "ShoppingAndCity") {
    return (
      <NavTxt
        children="Шоппинг, город"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "CultureAndHistory") {
    return (
      <NavTxt
        children="Культура, история"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else if (props.Categ === "NightLife") {
    return (
      <NavTxt children="Ночная жизнь" Clicked={NavCategLinkPath(props.Categ)} />
    );
  } else if (props.Categ === "VacationWithChildren") {
    return (
      <NavTxt
        children="Отдых с детьми"
        Clicked={NavCategLinkPath(props.Categ)}
      />
    );
  } else return "";
}

function NavCateg(props) {
  if (props.Categ === "AnyWhere") {
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
    <NavigatorContainer size={props.size}>
      <NavigatorRow size={props.size}>
        {NavigatorPoints.map(Number => (
          <NavCateg
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
