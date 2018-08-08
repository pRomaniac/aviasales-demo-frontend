import React from "react";
import styled, { css } from "styled-components";
import calend_icon from "../img/Calend_icon.svg";

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

function WithoutNull(val) {
  if (val) {
    return val;
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

const DepartCity = styled.div``;

const DestCity = styled.div``;

function BestPricesCardDeptEnum(props) {
  {
    //{DestCards.map(number => CityDiv(number, props))}
    return BestPrices.map(Depart => BestPricesCardEnum(props, Depart));
  }
}

function BestPricesCardEnum(props, number) {
  {
    return (
      <DestCity key={number.Destination}>
        {WithoutNull(number.Destination) +
          "  " +
          WithoutNull(number.Comment) +
          " " +
          WithoutNull(number.Country)}
        {number.Prices.map(Depart => DeptCard(props, Depart))}
      </DestCity>
    );
    //DebugConsole(number.Destination);
    //number.Prices.map(Depart => DebugConsole(Depart.Departure));
    //return "";
  }
}

function DeptCard(props, number) {
  return (
    <DepartCity key={number.Departure}>
      {WithoutNull(number.Departure) + " " + WithoutNull(number.MinPrice)}
    </DepartCity>
  );
}

function DebugConsole(name) {
  return console.log(name);
}

function Debug(name) {
  return { name };
}

function Footer(props) {
  return (
    <BestPricesDiv size={props.size}>
      <CalendDiv size={props.size} />
      <CalendHeader size={props.size}>{HeaderText}</CalendHeader>
      {BestPricesCardDeptEnum(props)}
    </BestPricesDiv>
  );
}

export default Footer;
