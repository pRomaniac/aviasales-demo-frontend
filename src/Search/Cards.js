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
const CardContent = [
  {
    category: "mostchipest",
    price: 7712,
    to: {
      company: "rossia",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "rossia",
      Times: "10:35 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "35",
      FlightType: "Прямой"
    }
  },
  {
    category: "mostfast",
    price: 9269,
    to: {
      company: "fly",
      Times: "07:30 - 09:50",
      FlightTimeH: "4",
      FlightTimeM: "20",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      Times: "11:20 - 17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "CDG"
    }
  },
  {
    category: "best",
    price: 8029,
    to: {
      company: "nordwind1",
      Times: "00:15 - 03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind1",
      Times: "10:45 - 17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 8164,
    to: {
      company: "nordwind2",
      Times: "00:15 - 03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind2",
      Times: "10:45 - 17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 8240,
    to: {
      company: "redwings",
      Times: "07:00 - 09:30",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    },
    from: {
      company: "redwings",
      Times: "11:00 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 9108,
    to: {
      company: "redwings",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "rossia",
      Times: "11:00 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 9485,
    to: {
      company: "rossia",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      Times: "11:20 - 17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "Прямой"
    }
  }
];
function Price(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}
const Wrapper = styled.div`
  background: #eaeaea;
`;

const CardDiv = styled.div`
  background: #ffffff;
  margin-top: 4px;
  margin-bottom: 4px;
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
    props.categ === "mostchipest" &&
    css`
      background: #83d40b;
    `};
  ${props =>
    props.categ === "mostfast" &&
    css`
      background: #af7542;
    `};
  ${props =>
    props.categ === "best" &&
    css`
      background: #c279d1;
    `};
`;
const TypeImg = styled.img`
display:inline;
src={props.src}
margin-left:7px;`;

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
  display: flex;
  justify-content: space-between;
`;
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;

  color: #ff9241;

  margin-left: 6px;
  margin-top: 16px;
`;

const IconsDiv = styled.div`
  margin-right: 6px;
  margin-top: 12px;
`;
const IconsImg = styled.img`
display:inline;
src={props.src}`;
const ToDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FromDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TimesDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 14px;
  margin-left: 6px;
  flex-basis: 40%;
`;

const FlightTimeDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 14px;
  flex-basis: 30%;
`;

const FlightTypeDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 14px;
  margin-right: 6px;
  flex-basis: 30%;
  text-align: right;
`;

const TextDecoration = styled.img`
  margin-right: 8px;
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
  if (c1 === c2) {
    return (
      <IconsDiv size={props.size} key={c1}>
        <IconsImg src={BigIcon(c1)} size={props.size} />
      </IconsDiv>
    );
  } else
    return (
      <IconsDiv size={props.size} key={c1}>
        <IconsImg src={SmallIcon(c1)} size={props.size} key={c1} />
        <IconsImg src={SmallIcon(c2)} size={props.size} key={c2} />
      </IconsDiv>
    );
}

function Times(h, m) {
  if (m === 0 || m === "0" || !m) {
    return h + " ч";
  } else {
    return h + " ч " + m + " м";
  }
}

function Types(props, category) {
  var icon = "";
  var text = "";
  category = props.category;
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
  } else {
    return (
      <TypeDiv size={props.props.props.size} categ={category}>
        <TypeText size={props.props.props.size} categ={category}>
          {text}
          <TypeImg size={props.props.props.size} src={icon} categ={category} />
        </TypeText>
      </TypeDiv>
    );
  }
}
function Card(props, Card) {
  return (
    <CardDiv size={props.size} key={Card.from}>
      <Types props={props} category={Card.category} />
      <TitleDiv size={props.size}>
        {" "}
        <PriceDiv size={props.size}>
          {Price(Card.price.toString()) + " ₽"}
        </PriceDiv>
        {Icons(props, Card.from.company, Card.to.company)}
      </TitleDiv>
      <BodyDiv size={props.size}>
        <FromDiv size={props.size}>
          <TimesDiv size={props.size}>
            <TextDecoration src={flightfrom} />
            {Card.from.Times}
          </TimesDiv>
          <FlightTimeDiv size={props.size}>
            <TextDecoration src={clock} />
            {Times(Card.from.FlightTimeH, Card.from.FlightTimeM)}
          </FlightTimeDiv>
          <FlightTypeDiv size={props.size}>
            {Card.from.FlightType}
          </FlightTypeDiv>
        </FromDiv>
        <ToDiv size={props.size}>
          <TimesDiv size={props.size}>
            <TextDecoration src={flightto} />
            {Card.to.Times}
          </TimesDiv>
          <FlightTimeDiv size={props.size}>
            <TextDecoration src={clock} />
            {Times(Card.to.FlightTimeH, Card.to.FlightTimeM)}
          </FlightTimeDiv>
          <FlightTypeDiv size={props.size}>{Card.to.FlightType}</FlightTypeDiv>
        </ToDiv>
      </BodyDiv>
    </CardDiv>
  );
}

function SearchCards(props) {
  return (
    <Wrapper size={props.size}>
      {CardContent.map(CardOne => Card(props, CardOne))}
    </Wrapper>
  );
}

export default SearchCards;
