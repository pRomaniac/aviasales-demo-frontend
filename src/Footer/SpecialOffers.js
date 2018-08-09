import React from "react";
import styled, { css } from "styled-components";

const SpecialOffers = [
  {
    id: 1,
    title: "Билеты от",
    timeout: 45,
    company: "Pobeda",
    minprice: "499",
    text1: "Билеты от 499 рублей!",
    text2: "Специальное предложение от авиакомпании Победа"
  },
  {
    id: 2,
    title: "В Нью-Йорк от",
    timeout: 19,
    company: "Lufthansa",
    minprice: "20680",
    text1:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa",
    text2: null
  },
  {
    id: 3,
    title: "В Лос-Анджелес от",
    timeout: 22,
    company: "Lufthansa",
    minprice: "20360",
    text1:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa",
    text2: null
  }
];

function ForPrice(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}

const BestPriceContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
`;

const BestPriceRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  ${props =>
    props.size === "mobile" &&
    css`
      flex-wrap: wrap;
    `};
`;

const BestPriceCard = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      flex-basis: 100%;
    `};
`;

function BestPriceCards(props) {
  return SpecialOffers.map(Off => Card(props, Off));
}

const Title = styled.div`
  text-overflow: ellipsis;
`;
const Timeout = styled.div``;
const Texts = styled.div``;
const Company = styled.div``;
const Price = styled.div``;

function GetTimeOutRus(timeout) {
  var t10 = timeout % 10;
  switch (t10) {
    case 1:
      return " день";
      break;
    case 2:
      return " дня";
      break;
    case 3:
      return " дня";
      break;
    case 4:
      return " дня";
      break;
    default:
      return " дней";
      break;
  }
}

function Card(props, Off) {
  return (
    <BestPriceCard size={props.size} key={Off.id}>
      <Title>{Off.title + " " + ForPrice(Off.minprice) + " ₽"}</Title>
      <Timeout>
        {"Осталось " + Off.timeout + GetTimeOutRus(Off.timeout)}
      </Timeout>
      <Texts>{Off.text1}</Texts>
      <Texts>{Off.text2}</Texts>
      <Company>{Off.company}</Company>
      <Price>{ForPrice(Off.minprice) + " ₽"}</Price>
    </BestPriceCard>
  );
}

function Ofers(props) {
  console.log(BestPriceCards.width);
  return (
    <BestPriceContainer size={props.size}>
      <BestPriceRow size={props.size}>
        <BestPriceCards size={props.size} />
      </BestPriceRow>
    </BestPriceContainer>
  );
}

export default Ofers;
