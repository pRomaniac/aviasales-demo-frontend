import React from "react";
import styled, { css } from "styled-components";

import TitleIconImg from "../img/ticket_icon.svg";
import PobedaIcon from "../img/pobeda.svg";
import LuftIcon from "../img/Lufthansa.svg";

const SpecialOffers = [
  {
    id: 1,
    title: "Билеты от",
    timeout: 45,
    company: "Pobeda",
    minprice: "499",
    text1: "Билеты от 499 рублей!",
    text2: "Специальное предложение от авиакомпании Победа",
    src: PobedaIcon,
    titleicon: null
  },
  {
    id: 2,
    title: "В Нью-Йорк от",
    timeout: 19,
    company: "Lufthansa",
    minprice: "20680",
    text1: "Из Москвы в США от 20680 рублей!",
    text2: "Специальное предложение от авиакомпании Lufthansa",
    src: LuftIcon,
    titleicon: TitleIconImg
  },
  {
    id: 3,
    title: "В Лос-Анджелес от",
    timeout: 22,
    company: "Lufthansa",
    minprice: "20360",
    text1: "Из Москвы в США от 22360 рублей!",
    text2: "Специальное предложение от авиакомпании Lufthansa",
    src: LuftIcon,
    titleicon: TitleIconImg
  }
];

function ForPrice(val) {
  return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}

const BestPriceContainer = styled.div`
  background: linear-gradient(107.04deg, #00b0de 0%, #196ebd 100%);
`;

const BestPriceRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 32px;
  ${props =>
    props.size === "mobile" &&
    css`
      flex-wrap: wrap;
    `};
  ${"" /*   ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 200px;
      margin-right: 200px;
    `}; */};
`;

const BestPriceCard = styled.div`
  height: 270px;
  background: #ffffff;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 12px;
      flex-basis: 100%;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 240px;
      margin-left: 8px;
      margin-right: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 300px;
      margin-left: 34px;
      margin-right: 34px;
    `};
`;

function BestPriceCards(props) {
  return SpecialOffers.map(Off => Card(props, Off));
}

const TitleTextDIv = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      width: 210px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 170px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 168px;
    `};
`;

const TitleText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 16px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  white-space: nowrap;
  color: #ffffff;
`;

const TitleIcon = styled.img`
  display: inline;

  z-index: 2;
  margin-right: 8px;
`;

const TopTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;

  margin-left: 6px;
  margin-right: 6px;
  ${props =>
    props.size === "tablet" &&
    css`
      margin-top: 16px;
      margin-bottom: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 42px;
      font-size: 30px;

      color: #ffffff;
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-top: 16px;
      margin-bottom: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 42px;
      font-size: 30px;

      color: #ffffff;
      margin-left: 200px;
      margin-right: 200px;
    `};
`;

const Title = styled.div`
  background-color: #cd2027;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const OfferBody = styled.div`
  padding-top: 18px;
  padding-left: 8px;
  padding-right: 8px;
`;

const OfferBodyHeader = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  ${props =>
    props.size === "desktop" &&
    css`
      margin-bottom: 12px;
    `};
`;

const CompanyImgDiv = styled.div`
  position: relative;
  padding-top: 2px;
  float: left;
  ${props =>
    props.size === "moblie" &&
    css`
      width: 122px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 100px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      padding-left: 12px;
      width: 120px;
    `};
`;

const CompanyImg = styled.img`
  ${props =>
    props.size === "moblie" &&
    css`
      width: 122px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 100px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 120px;
    `};
`;

const PriceTimout = styled.div`
  position: relative;
  padding-top: 0;
  float: right;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;
  text-align: right;

  color: #5c5c5c;
`;

const TextsDiv = styled.div`
  float: unset;
`;

const Timeout = styled.div`
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
`;
const Texts = styled.div`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #242424;
`;

const OfferDetails = styled.div`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: auto;
  padding-right: auto;
  margin-top: 12px;
`;

const OfferDetailsLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #d93533;

  text-decoration: none;
`;

const Link = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
`;

const LinkToAll = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

const Remark = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

const RemarksDiv = styled.div`
  margin-top: 32px;
  display: flex;
  ${props =>
    props.size === "mobile" &&
    css`
      flex-direction: column;
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      margin-left: 8px;
      margin-right: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      margin-left: 204px;
      margin-right: 204px;
    `};
`;

const Price = styled.div``;

function GetTimeOutRus(timeout) {
  var t10 = timeout % 10;
  switch (t10) {
    case 1:
      return " день";

    case 2:
      return " дня";

    case 3:
      return " дня";

    case 4:
      return " дня";

    default:
      return " дней";
  }
}

function Card(props, Off) {
  return (
    <BestPriceCard className="BestPriceCard" size={props.size} key={Off.id}>
      <Title size={props.size} className="Title">
        {" "}
        <TitleIcon src={Off.titleicon} className="TitleIcon" />
        <TitleTextDIv size={props.size} className="TitleTextDIv">
          <TitleText size={props.size} className="TitleText">
            {Off.title + " " + ForPrice(Off.minprice) + " ₽"}
          </TitleText>
        </TitleTextDIv>
      </Title>
      <OfferBody size={props.size} className="OfferBody">
        <OfferBodyHeader className="OfferBodyHeader">
          <CompanyImgDiv className="CompanyImgDiv" size={props.size}>
            <CompanyImg
              className="CompanyImg"
              src={Off.src}
              size={props.size}
            />
          </CompanyImgDiv>
        </OfferBodyHeader>
        <PriceTimout className="PriceTimout" size={props.size}>
          <Price className="Price" size={props.size}>
            {ForPrice(Off.minprice) + " ₽"}
          </Price>
          <Timeout className="Timeout" size={props.size}>
            {"Осталось " + Off.timeout + GetTimeOutRus(Off.timeout)}
          </Timeout>
        </PriceTimout>
        <TextsDiv className="TextsDiv" size={props.size}>
          <Texts className="Texts" size={props.size}>
            {Off.text1}
          </Texts>
          <Texts className="Texts" size={props.size}>
            {Off.text2}
          </Texts>
        </TextsDiv>
        <OfferDetailsLink
          className="OfferDetailsLink"
          size={props.size}
          href={Off.company}
        >
          <OfferDetails className="OfferDetails" size={props.size}>
            Узнать подробности
          </OfferDetails>
        </OfferDetailsLink>
      </OfferBody>
    </BestPriceCard>
  );
}

function Ofers(props) {
  return (
    <BestPriceContainer size={props.size} className="BestPriceContainer">
      <TopTitle className="TopTitle" size={props.size}>
        Спецпредложения на авиабилеты
      </TopTitle>
      <BestPriceRow className="BestPriceRow" size={props.size}>
        <BestPriceCards className="OfferDetailsLink" size={props.size} />
      </BestPriceRow>
      <RemarksDiv className="RemarksDiv" size={props.size}>
        <LinkToAll className="LinkToAll" href="#">
          <Link className="Link" href="#">
            Смотреть все спецпредложения
          </Link>
        </LinkToAll>
        <Remark className="Remark">* средняя цена по направлению </Remark>
      </RemarksDiv>
    </BestPriceContainer>
  );
}

export default Ofers;
