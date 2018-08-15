import React from "react";
import styled, { css } from "styled-components";

import small_russia from "../img/rossia_small_icon.png";
import small_fly from "../img/fly_small_icon.png";
import small_redwings from "../img/redwings_small_icon.png";

import big_russia from "../img/rossia_big_icon.png";
import big_fly from "../img/fly_big_icon.png";
import big_redwings from "../img/redwings_big_icon.png";
import nordwind1 from "../img/nordwind1_big_icon.png";
import nordwind2 from "../img/nordwind2_big_icon.png";

import chipest from "../img/mostchipest.png";
import speedest from "../img/lightning.png";
import best from "../img/best.png";

import flightto from "../img/small_aeroplane.svg";
import flightfrom from "../img/small_aeroplane_from.svg";
import clock from "../img/clock.svg";

import CardContent from "./CardsContent";

function Price(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}

function Times(h, m) {
  if (m === 0 || m === "0" || !m) {
    return h + " ч";
  } else {
    return h + " ч " + m + " м";
  }
}

function TimesFlights(card) {
  return card.TimeFrom + " - " + card.TimeTo;
}

const Wrapper = styled.div`
  background: #eaeaea;
`;
const CardDiv = styled.div`
  background: #ffffff;
  margin-top: 4px;
  margin-bottom: 4px;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 4px;
      margin-bottom: 4px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      display: flex;
    `};
`;

const TypeDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: flex;
      height: 32px;
      vertical-align: middle;
    `};
  ${props =>
    (props.categ === "mostchipest") & (props.size === "mobile") &&
    css`
      background: #83d40b;
    `};
  ${props =>
    (props.categ === "mostfast") & (props.size === "mobile") &&
    css`
      background: #af7542;
    `};
  ${props =>
    (props.categ === "best") & (props.size === "mobile") &&
    css`
      background: #c279d1;
    `};
`;
const TypeImg = styled.img`
  ${props =>
    props.size === "mobile" &&
    css`
display:inline;
src={props.src}
margin-left:7px;
`};
`;

const TypeText = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: inline;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: 18px;
      font-size: 14px;

      color: #ffffff;
      margin-left: 6px;
      margin-top: 7px;
      margin-bottom: 7px;
    `};
`;
const TitleDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: flex;
      justify-content: space-between;
    `};
`;
const BodyDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: flex;
      flex-direction: column;
    `};
`;

const PriceDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 22px;

      color: #ff9241;

      margin-left: 6px;
      margin-top: 16px;
    `};
`;

const IconsDiv = styled.div`
  ${props => props.size === "mobile" && css``};
`;
const IconsImg = styled.img`
  ${props =>
    props.size === "mobile" &&
    css`      margin-right: 6px;
      margin-top: 12px;
      display:inline;
      src={props.src} ;
    `};
`;
const ToDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: flex;
      justify-content: space-between;
    `};
`;
const FromDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      display: flex;
      justify-content: space-between;
    `};
`;
const TimesDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 10px;
      margin-bottom: 14px;
      margin-left: 6px;
      flex-basis: 40%;
    `};
`;

const FlightTimeDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 10px;
      margin-bottom: 14px;
      flex-basis: 30%;
    `};
`;

const FlightTypeDiv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 10px;
      margin-bottom: 14px;
      margin-right: 6px;
      flex-basis: 30%;
      text-align: right;
    `};
`;

const TextDecoration = styled.img`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-right: 8px;
    `};
`;

const ButtonDiv = styled.div`
  ${props =>
    (props.size === "mobile") & (props.styl === "Filter") &&
    css`
      margin-right: auto;
      margin-left: auto;

      padding-left: auto;
      padding-right: auto;
      padding-top: 8px;
      padding-bottom: 16px;
      width: 150px;
      height: 40px;
    `};
  ${props =>
    (props.size === "mobile") & (props.styl === "Up") &&
    css`
      margin-right: auto;
      margin-left: auto;

      padding-left: auto;
      padding-right: auto;
      padding-top: 12px;
      padding-bottom: 16px;
      width: 88px;
      height: 28px;
    `};
`;

const Button = styled.button`
  border: 0;
  ${props =>
    (props.size === "mobile") & (props.styl === "Filter") &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 16px;
      text-align: center;

      color: #ffffff;

      background: #00ace2;
      border-radius: 100px;

      padding-left: auto;
      padding-right: auto;
      padding-top: auto;
      padding-bottom: auto;
      width: 150px;
      height: 40px;
    `};
  ${props =>
    (props.size === "mobile") & (props.styl === "Up") &&
    css`
      background: #00ace2;
      mix-blend-mode: normal;
      opacity: 0.5;
      border-radius: 100px;
      padding-left: auto;
      padding-right: auto;
      padding-top: auto;
      padding-bottom: auto;
      width: 88px;
      height: 28px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    `};
`;

function BigIcon(c) {
  var icon;
  if (c === "rossia") {
    icon = big_russia;
  }
  if (c === "fly") {
    icon = big_fly;
  }
  if (c === "nordwind1") {
    icon = nordwind1;
  }
  if (c === "nordwind2") {
    icon = nordwind2;
  }
  if (c === "redwings") {
    icon = big_redwings;
  }

  return icon;
}
function SmallIcon(c) {
  var icon;
  if (c === "rossia") {
    icon = small_russia;
  }
  if (c === "fly") {
    icon = small_fly;
  }
  if (c === "nordwind1") {
    icon = nordwind1;
  }
  if (c === "nordwind2") {
    icon = nordwind2;
  }
  if (c === "redwings") {
    icon = small_redwings;
  }
  return icon;
}

function Icons(props, c1, c2) {
  const size = props.size;
  if (c1 === c2) {
    return (
      <IconsDiv size={size} key={c1}>
        <IconsImg src={BigIcon(c1)} size={size} />
      </IconsDiv>
    );
  } else
    return (
      <IconsDiv size={size} key={c1}>
        <IconsImg src={SmallIcon(c1)} size={size} key={c1} />
        <IconsImg src={SmallIcon(c2)} size={size} key={c2} />
      </IconsDiv>
    );
}

function Types(props, category) {
  var icon = "";
  var text = "";
  category = props.category;
  const size = props.props.size; //??Вот я вообще не понял. Как так ? Чудес то не бывает....
  switch (category) {
    case "mostchipest":
      icon = chipest;
      text = "Самый дешевый";
      break;
    case "mostfast":
      icon = speedest;
      text = "Самый быстрый";
      break;
    case "best":
      icon = best;
      text = "Самый лучший";
      break;
    default:
      icon = null;
  }

  if (icon === null) {
    return "";
  } else if (size === "mobile") {
    return (
      <TypeDiv size={size} categ={category}>
        <TypeText size={size} categ={category}>
          {text}
          <TypeImg size={size} src={icon} categ={category} />
        </TypeText>
      </TypeDiv>
    );
  } else return "";
}

function CardMobile(props, Card) {
  const size = props.size;
  return (
    <CardDiv size={size} key={Card.id}>
      <Types props={props} category={Card.category} />

      <TitleDiv size={size}>
        <PriceDiv size={size}>{Price(Card.price.toString()) + " ₽"}</PriceDiv>
        {Icons(props, Card.from.company, Card.to.company)}
      </TitleDiv>
      <BodyDiv size={size}>
        <FromDiv size={size}>
          <TimesDiv size={size}>
            <TextDecoration src={flightfrom} size={size} />
            {TimesFlights(Card.from)}
          </TimesDiv>
          <FlightTimeDiv size={size}>
            <TextDecoration src={clock} size={size} />
            {Times(Card.from.FlightTimeH, Card.from.FlightTimeM)}
          </FlightTimeDiv>
          <FlightTypeDiv size={size}>{Card.from.FlightType}</FlightTypeDiv>
        </FromDiv>
        <ToDiv size={size}>
          <TimesDiv size={size}>
            <TextDecoration src={flightto} size={size} />
            {TimesFlights(Card.to)}
          </TimesDiv>
          <FlightTimeDiv size={size}>
            <TextDecoration src={clock} size={size} />
            {Times(Card.to.FlightTimeH, Card.to.FlightTimeM)}
          </FlightTimeDiv>
          <FlightTypeDiv size={size}>{Card.to.FlightType}</FlightTypeDiv>
        </ToDiv>
      </BodyDiv>
    </CardDiv>
  );
}

function Buttons(props) {
  if (props.size === "mobile") {
    return (
      <Button size={props.size} styl={props.styl} children={props.children} />
    );
  } else {
    return "";
  }
}

function compareNumbers(a, b) {
  return a.id - b.id;
}

function sortbyid(arr) {
  var PriceCard;
  PriceCard = arr.sort(compareNumbers);
  return PriceCard;
}

function SearchCards(props) {
  const CardsMobile = sortbyid(CardContent);
  const size = props.size;
  if (size === "mobile") {
    return (
      <Wrapper size={size}>
        <ButtonDiv size={size} styl="Up">
          <Buttons size={size} styl="Up" children="Вверх" />
        </ButtonDiv>
        {CardsMobile.map(CardOne => CardMobile(props, CardOne))}
        <ButtonDiv size={size} styl="Filter">
          <Buttons size={size} styl="Filter" children="Фильтровать" />
        </ButtonDiv>
      </Wrapper>
    );
  }
}

export default SearchCards;
