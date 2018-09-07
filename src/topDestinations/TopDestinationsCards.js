import React from "react";
import styled, { css } from "styled-components";

import Krasnodar from "../img/Krasnodar.jpg";
import Sochi from "../img/Sochi.jpg";
import Spb from "../img/Spb.jpg";
import MinVod from "../img/MineralWater.jpg";
import Symph from "../img/Sympheropol.jpg";
import Barcel from "../img/Barcelona.jpg";
import RuFlag from "../img/ru_flag.svg";
import EsFlag from "../img/es_flag.svg";

const DestCards = [
  {
    City: "Краснодар",
    Country: "Россия",
    Comments: null,
    src: { Krasnodar },
    price: "1212",
    date: "18.03.2018"
  },
  {
    City: "Сочи",
    Country: "Россия",
    Comments: "Адлер",
    src: { Sochi },
    price: "1334",
    date: "27.03.2018"
  },
  {
    City: "Санкт-Петербург",
    Country: "Россия",
    Comments: null,
    src: { Spb },
    price: "1508",
    date: "19.02.2018"
  },
  {
    City: "Минеральные Воды",
    Country: "Россия",
    Comments: null,
    src: { MinVod },
    price: "2074",
    date: "13.03.2018"
  },
  {
    City: "Симферополь",
    Country: "Россия",
    Comments: "Крым",
    src: { Symph },
    price: "2407",
    date: "13.03.2018"
  },
  {
    City: "Барселона",
    Country: "Испания",
    Comments: null,
    src: { Barcel },
    price: "4247",
    date: "24.03.2018"
  }
];

function TopDestCardString(val) {
  if (val) {
    return val;
  } else return "";
}

function TopDestCardStringComments(val) {
  if (val) {
    return "(" + val + ")";
  } else return "";
}

function TopDestCardStringPrice(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 "); //честно спиздил из инета по хорошому надо цикл по массиву стринга организовывать, с конца, и после каждой третьего символа вставлять пробел.
}

function TopDestCardStringDate(val) {
  const monthNames = [
    "января",
    "Февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  const date = val.replace(/(\d+).(\d+).(\d+)/, "$1");
  const month = parseInt(val.replace(/(\d+).(\d+).(\d+)/, "$2"), 10) - 1;
  //const year = val.replace(/(\d+).(\d+).(\d+)/, "$3");

  return date + " " + monthNames[month];
}

const CardDiv = styled.div`
  margin-top: 40px;
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 12px;
  flex-basis: 100%;
  ${props =>
    props.size === "desktop" &&
    css`
      padding-bottom: 16px;
      flex-basis: 48%;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-bottom: 16px;
      flex-basis: 82%;
    `};
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
`;

const CardImg = styled.div`
  margin-left: auto;
  margin-right: auto;

  height: 176px;
  background-image: url(${props => props.src});
  background-clip: content-box;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px 8px 0 0;
  ${props =>
    props.size === "tablet" &&
    css`
      height: 335px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      height: 212px;
    `};
`;

const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${props =>
    props.size === "mobile" &&
    css`
      margin: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 96px;
      margin-right: 96px;
    `};
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${props =>
    props.size === "mobile" &&
    css`
      margin: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 96px;
      margin-right: 96px;
    `};
`;

const CityNameTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  padding-right: 16px;
  padding-left: 16px;
  justify-content: space-between;

  ${props =>
    !(props.size === "mobile") &&
    css`
      width: 100%;
      padding-right: 16px;
      padding-left: 16px;
    `};
`;

const CityNameDiv = styled.div`
  flex-basis: 50%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
  ${props =>
    !(props.size === "mobile") &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: 32px;
      font-size: 22px;

      color: #5b5b5c;
    `};
`;

const CityPriceDiv = styled.div`
  flex-basis: 50%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
  ${props =>
    !(props.size === "mobile") &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 32px;
      font-size: 22px;
      text-align: right;

      color: #00bae8;
    `};
`;

const CityCountryDiv = styled.div`
  flex-basis: 50%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

const SearchDateDiv = styled.div`
  flex-basis: 50%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;

const FlagIcon = styled.img`
  margin-left: 7px;
  ${props =>
    !(props.size === "mobile") &&
    css`
      margin-right: 5px;
    `};
`;

const ForIconDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;

  /*justify-content: space-around;*/
`;

const TextsLeftRight = styled.div`
  flex-basis: 50%;
`;

function FlagIconImg(number, props) {
  if (props.size === "tablet" || props.size === "desktop") {
    if (number.Country === "Испания") {
      return <FlagIcon className="FlagIcon" src={EsFlag} />;
    } else {
      return <FlagIcon className="FlagIcon" src={RuFlag} />;
    }
  } else return "";
}

function CityImg(number, props) {
  return (
    <CardImg
      className="CardImg"
      src={Object.values(number.src)}
      size={props.size}
    />
  );
}

function CityName(number, props) {
  return (
    <CityNameDiv className="CityNameDiv" size={props.size}>
      {TopDestCardString(number.City) +
        " " +
        TopDestCardStringComments(number.Comments)}
    </CityNameDiv>
  );
}

function CityPrice(number, props) {
  return (
    <CityPriceDiv className="CityPriceDiv" key={number.City} size={props.size}>
      {"Найти от " +
        TopDestCardStringPrice(TopDestCardString(number.price)) +
        " ₽"}
    </CityPriceDiv>
  );
}

function CityTextsDiv(number, props) {
  return (
    <CityNameTexts className="CityNameTexts" size={props.size}>
      <TextsLeftRight className="TextsLeftRight">
        {CityName(number, props)}
        <CityCountryDiv className="CityCountryDiv" size={props.size}>
          {TopDestCardString(number.Country)}
        </CityCountryDiv>
      </TextsLeftRight>
      <TextsLeftRight className="TextsLeftRight">
        {CityPrice(number, props)}
        <SearchDateDiv className="SearchDateDiv" size={props.size}>
          {TopDestCardStringDate(number.date)}
        </SearchDateDiv>
      </TextsLeftRight>
    </CityNameTexts>
  );
}

function IconTextsDiv(number, props) {
  if (props.size === "tablet" || props.size === "desktop") {
    return (
      <ForIconDiv className="ForIconDiv">
        {FlagIconImg(number, props)}
        {CityTextsDiv(number, props)}
      </ForIconDiv>
    );
  } else return CityTextsDiv(number, props);
}

function CityDiv(number, props) {
  return (
    <CardDiv className="CardDiv" key={number.City} size={props.size}>
      {CityImg(number, props)}
      {IconTextsDiv(number, props)}
    </CardDiv>
  );
}

function TopDestCards(props) {
  return (
    <CardContainer className="CardContainer" size={props.size}>
      <CardRow className="CardRow" size={props.size}>
        {DestCards.map(number => CityDiv(number, props))}
      </CardRow>
    </CardContainer>
  );
}

export default TopDestCards;
