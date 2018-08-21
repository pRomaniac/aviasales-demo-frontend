import React from "react";
import styled, { css } from "styled-components";
import calend_icon from "../img/Calend_icon.svg";
import flag_ru from "../img/ru_flag.svg";
import flag_am from "../img/flag-am.svg";
import flag_md from "../img/flag-md.svg";

const BestPrices = [
  {
    Destination: "Симферополь",
    Comment: "Крым",
    Country: "Крым",
    Prices: [
      {
        Departure: "из Москвы",
        MinPrice: "4813"
      },
      {
        Departure: "из Санкт-Петербурга",
        MinPrice: "7857"
      },
      {
        Departure: "из Новосибирска",
        MinPrice: "15127"
      },
      {
        Departure: "из Екатеринбурга",
        MinPrice: "9275"
      },
      {
        Departure: "из Челябинска",
        MinPrice: "9148"
      }
    ]
  },
  {
    Destination: "Ереван",
    Comment: null,
    Country: "Армения",
    Prices: [
      {
        Departure: "из Москвы",
        MinPrice: "5758"
      },
      {
        Departure: "из Санкт-Петербурга",
        MinPrice: "9932"
      },
      {
        Departure: "из Сочи",
        MinPrice: "11951"
      },
      {
        Departure: "из Краснодара",
        MinPrice: "11741"
      },
      {
        Departure: "из Ростова-на-Дону",
        MinPrice: "11956"
      }
    ]
  },
  {
    Destination: "Кишинев",
    Comment: null,
    Country: "Молдавия",
    Prices: [
      {
        Departure: "из Москвы",
        MinPrice: "8319"
      },
      {
        Departure: "из Санкт-Петербурга",
        MinPrice: "10800"
      },
      {
        Departure: "из Краснодара",
        MinPrice: "11741"
      },
      {
        Departure: "из Сургута",
        MinPrice: "16277"
      },
      {
        Departure: "из Нового Уренгоя",
        MinPrice: "15987"
      }
    ]
  }
];

function TopDestCardStringPrice(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}

function WithoutNull(val) {
  if (val) {
    return val;
  } else return "";
}

function WithoutNullComments(val) {
  if (val) {
    return "(" + val + ")";
  } else return "";
}
const BestPricesDiv = styled.div``;

const Calend = styled.div`
  padding-top: 56px;
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 32px;
    `};
`;

const CalenImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function CalendDiv(props) {
  return (
    <Calend props={props}>
      <CalenImg props={props} src={calend_icon} />
    </Calend>
  );
}

const CalendHeader = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;

  color: #4a4a4a;
  margin-top: 20px;
  ${props =>
    props.size === "mobile" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      font-size: 18px;
      text-align: center;

      color: #4a4a4a;
    `};
`;

const HeaderText = "Лучшие цены на авиабилеты за последний месяц";

const DepartCity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
      flex-wrap: wrap;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      justify-content: space-between;
    `};
`;

const DepartCityWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 8px;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
      flex-wrap: wrap;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 72px;
      margin-right: 72px;
      flex-wrap: wrap;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      justify-content: center;
    `};
`;

const DestCity = styled.div`
      padding-left: 35px;
      padding-right: 35px;
 ${props =>
   props.size === "mobile" &&
   css`
     padding-left: 0px;
     padding-right: 0px;
     padding-top: 24px;
     padding-bottom: 24px;
     flex-basis: 100%;
   `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-left: 0px;
      padding-right: 0px;

      padding-top: 24px;
      padding-bottom: 24px;
      flex-basis: 100%;
    `};*
  ${props =>
    props.size === "desktop" &&
    css`
      padding-left: 35px;
      padding-right: 35px;
      flex-basis: 24%;
    `};

      ${props =>
        props.size === "desktop" &&
        !props.islast &&
        css`
          border-right: 1px dashed #afbec6;
        `};
        ${props =>
          !(props.size === "desktop") &&
          !props.islast &&
          css`
            border-bottom: 1px dashed #afbec6;
          `};
`;

function BestPricesCardDeptEnum(props) {
  //{DestCards.map(number => CityDiv(number, props))}
  return (
    <DepartCityWrapper size={props.size} className="DepartCityWrapper">
      {BestPrices.map(Depart => BestPricesCardEnum(props, Depart))}
    </DepartCityWrapper>
  );
}

const IconImg = styled.img`
  display: inline;
`;

function CountryFlag(props) {
  var icon;
  switch (props.country) {
    case "Крым":
      icon = flag_ru;
      break;
    case "Армения":
      icon = flag_am;
      break;
    case "Молдавия":
      icon = flag_md;
      break;
    default:
      icon = "";
  }

  if (icon === "") {
    return "";
  } else
    return (
      <IconImg
        src={icon}
        size={props.size}
        className={"IconImg" + icon.toString()}
      />
    );
}

const DepartWrapper = styled.div`
  display: flex;
`;

const DepartCityDiv = styled.div`
  display: block;
`;

const DepartCityTextDiv = styled.div`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;
`;

const DepartCountryDiv = styled.div`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

function BestPricesCardEnum(props, number) {
  var islast = false;
  if (BestPrices[BestPrices.length - 1].Destination === number.Destination) {
    islast = true;
  }

  return (
    <DestCity
      className="DestCity"
      key={number.Destination}
      size={props.size}
      islast={islast}
    >
      <DepartWrapper size={props.size} className="DepartWrapper">
        <CountryFlag country={number.Country} className="CountryFlag" />
        <DepartCityDiv className="DepartCityDiv">
          <DepartCityTextDiv className="DepartCityTextDiv">
            {WithoutNull(number.Destination) +
              "  " +
              WithoutNullComments(number.Comment)}
          </DepartCityTextDiv>
          <DepartCountryDiv className="DepartCountryDiv">
            {WithoutNull(number.Country)}
          </DepartCountryDiv>
        </DepartCityDiv>
      </DepartWrapper>
      {number.Prices.map(Depart => DeptCard(props, Depart))}
    </DestCity>
  );
  //DebugConsole(number.Destination);
  //number.Prices.map(Depart => DebugConsole(Depart.Departure));
  //return "";
}

const DepartCityName = styled.div`
  display: inline;
`;
const DepartCityPrice = styled.div`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #00bae8;
`;
function DeptCard(props, number) {
  return (
    <DepartCity className="DepartCity" key={number.Departure} size={props.size}>
      <DepartCityName
        size={props.size}
        className={"DeptCardDepartCityName"}
      >
        {WithoutNull(number.Departure)}
      </DepartCityName>
      <DepartCityPrice
        size={props.size}
        className={"DeptCardDepartCityPrice"}
      >
        {TopDestCardStringPrice(WithoutNull(number.MinPrice)) + " ₽"}
      </DepartCityPrice>
    </DepartCity>
  );
}

/* function DebugConsole(name) {
  return console.log(name);
}

function Debug(name) {
  return { name };
} */

function Footer(props) {
  return (
    <BestPricesDiv size={props.size} className={"BestPricesBestPricesDiv"}>
      <CalendDiv size={props.size} className={"BestPricesCalendDiv"} />
      <CalendHeader size={props.size} className={"BestPricesCalendHeader"}>
        {HeaderText}
      </CalendHeader>
      {BestPricesCardDeptEnum(props)}
    </BestPricesDiv>
  );
}

export default Footer;
