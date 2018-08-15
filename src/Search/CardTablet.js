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

import take_off from "../img/plane-taking-off.svg";
import link_img from "../img/search_link.svg";
import pin from "../img/pin.svg";
//import FlightLine from "../img/FlightLine.svg";
import filter from "../img/TabletFilterForButton.png";
import Polzunok from "./Polzun";
/* ((((
import mainbagaja_svg from "../img/mainbagaje.svg";
import handbagaja_svg from "../img/handbagaje.svg";
import handbagaja_red_ from "../img/handbagaje_red.svg";
*/
import mainbagaja from "../img/main.png";
import handbagaja from "../img/hand.png";
import handbagaja_red from "../img/main_red.png";

import CardContent from "./CardsContent";

import openticket from "../img/OpenTicket.svg";

function pricevalue(val) {
  return val.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
}
const Pricing = styled.div`
  white-space: nowrap;
`;
function Price(val) {
  return (
    <PriceDiv>
      <Pricet1>Купить </Pricet1>
      <Pricing>
        <Pricet2>за</Pricet2> <Pricet3>{pricevalue(val)} ₽</Pricet3>
      </Pricing>
    </PriceDiv>
  );
}

function Times(h, m) {
  if (m === 0 || m === "0" || !m) {
    return h + " ч";
  } else {
    return h + " ч " + m + " м";
  }
}

/* function TimesFlights(card) {
  return card.TimeFrom + " - " + card.TimeTo;
} */

const Wrapper = styled.div`
  background: #eaeaea;
  ${props =>
    props.size === "tablet" &&
    css`
      ${"" /*       padding-top: 10px; */};
    `};
`;
const CardDiv = styled.div`
  background: #ffffff;
  ${"" /*   margin-top: 10px; */} margin-bottom: 20px;
  margin-right: 8px;
  margin-left: 8px;
  flex-basis: 100%;
  display: flex;
  min-width: 713px;
  border-radius: 4px;
`;

const OpenDiv = styled.div`
  background: #edf5f7;
  width: 20px;
  display: flex;
  align-items: center;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
const BodyDiv = styled.div``;

const PriceDiv = styled.div`
  margin-left: 24px;
  margin-right: 23px;
  background: #ff6d00;
  border-radius: 4px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 44px;
  padding-right: 43px;
  margin-bottom: 8px;
`;

const Pricet1 = styled.div`
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;
const Pricet2 = styled.div`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;
const Pricet3 = styled.div`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 16px;

  color: #ffffff;
`;

const IconsDiv = styled.div`
  margin-left: 16px;
`;
const IconsImg = styled.img`
  src=${props => props.src};
`;
const ToDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 12px;
  padding-bottom: 12px;
`;
const FromDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;

  border-bottom: 1px dashed #dddddd;
  box-sizing: border-box;

  padding-bottom: 12px;
`;

const FlightTimeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const BagajesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 7px;
  flex-wrap: nowrap;
`;

const TicketNumberDiv = styled.div`
  margin-bottom: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #ff654e;
`;

const BagajeDiv = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
  width: 100%;
  ${props =>
    props.green === 1 &&
    css`
      background: #f8fbfb;
    `};

  ${"" /*       ${props =>
    props.green === 1 &&
    css`
      background: red;
    `}; */};
`;
const BagajeDivAddPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  font-size: 10px;
  text-align: center;

  color: #66d295;
  flex-basis: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const BagajeCommentDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 10px;
  text-align: center;

  color: #9ab0b9;
  flex-basis: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const HandBagajDiv = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`;
const HandBagajImg = styled.img`
  src=${handbagaja}
  ${props =>
    (props.qty === "x") & (props.comment === undefined) &&
    css`
      src=${handbagaja_red}
    `};
`;
const HandBagajImgDiv = styled.div`
  text-align: center;
`;
const HandBagajImgtext = styled.div`
  margin-top: -17px;
  margin-left: -1px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;

  color: #9ab0b9;
  ${props =>
    (props.qty === "x") & (props.comment === undefined) &&
    css`
      color: red;
    `};
`;
const MainBagajDiv = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
`;
const MainBagajImg = styled.img`              
src=${mainbagaja}
  ${props =>
    (props.qty === "x") & (props.comment === undefined) &&
    css`
      fill: red;
    `};
`;
const MainBagajImgDiv = styled.div`
  text-align: center;
  ${props =>
    (props.qty === "x") & (props.comment === undefined) &&
    css`
      color: red;
    `};
`;
const MainBagajImgtext = styled.div`
  text-align: center;
  margin-top: -21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;

  color: #9ab0b9;
  ${props =>
    (props.qty === "x") & (props.comment === undefined) &&
    css`
      color: red;
    `};
`;
const ProvDiv = styled.div``;

const MainProvDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #a0b0b9;

  margin-bottom: 16px;
`;

const AddProvDiv = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;

  color: #59bce5;

  justify-content: space-between;

  margin-left: 24px;
  margin-right: 23px;
  margin-bottom: 9px;
`;

const AddProvDivText = styled.div``;
const AddProvDivPrice = styled.div``;
const AddProvDivOther = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #59bce5;
`;

const LinkImgDiv = styled.div`
  margin-right: 8px;
  display: inherit;
`;
const OpenImg = styled.img`
  margin-left: 4px;
  margin-right: 4px;
`;

const LinkImg = styled.img`
    src=${link_img}

    ${props =>
      props.take_off &&
      css`
        flex-basis: 33%;
      `};

      ${props =>
        props.order === 45 &&
        css`
          transform: rotate(-45deg);
        `};
`;

const RightTitleDiv = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
const LeftTitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ChapterDivText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 10px;

  color: #23a9f6;
`;

const CharterDiv = styled.div`
  color: #23a9f6;

  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #2196f3;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
  padding-bottom: 4px;

  margin-right: 14px;
`;

function Charter(charter) {
  if (charter) {
    return (
      <CharterDiv>
        <ChapterDivText>{charter}</ChapterDivText>{" "}
      </CharterDiv>
    );
  } else {
    return "";
  }
}

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

function BagajeComment(comment) {
  if (!comment) {
    return <BagajeCommentDiv> </BagajeCommentDiv>;
  } else {
    return <BagajeCommentDiv>{comment}</BagajeCommentDiv>;
  }
}

function bagajtext(bagaj, comment) {
  if (bagaj === null) {
    return "?";
  } else if (bagaj === 0) {
    return "x";
  } else return bagaj;
}

function main_red_bagaja(qty, comment) {
  console.log(comment === undefined);
  if ((qty === "x") & (comment === undefined)) {
    return handbagaja_red;
  } else {
    return mainbagaja;
  }
}

function Bagaj(props) {
  const size = props.size;
  const Bagaj = props.bagaj.bagaj;
  const BagajAdd = props.bagaj.bagaj.add;
  const comment = props.bagaj.bagajcomment;
  console.log(props.bagaj.bagajcomment);
  if (BagajAdd) {
    return (
      <BagajesDiv size={size}>
        <BagajeDiv size={size} green={1}>
          <HandBagajDiv size={size}>
            <HandBagajImgDiv>
              <HandBagajImg
                size={size}
                qty={bagajtext(Bagaj.hand)}
                src={handbagaja}
                comment={1}
              />
            </HandBagajImgDiv>
            <HandBagajImgtext qty={bagajtext(Bagaj.hand)} comment={1}>
              {bagajtext(Bagaj.hand)}
            </HandBagajImgtext>
          </HandBagajDiv>
          <MainBagajDiv size={size}>
            <MainBagajImgDiv>
              <MainBagajImg
                size={size}
                qty={bagajtext(Bagaj.main)}
                src={main_red_bagaja(bagajtext(Bagaj.main), comment)}
                comment={comment}
              />
            </MainBagajImgDiv>
            <MainBagajImgtext qty={bagajtext(Bagaj.main)} comment={comment}>
              {bagajtext(Bagaj.main)}
            </MainBagajImgtext>
          </MainBagajDiv>
          {BagajeComment(comment)}
        </BagajeDiv>
        <BagajeDiv size={props.size}>
          <HandBagajDiv size={size}>
            <HandBagajImgDiv>
              <HandBagajImg
                size={size}
                qty={bagajtext(BagajAdd.hand)}
                src={handbagaja}
                comment={1}
              />
            </HandBagajImgDiv>
            <HandBagajImgtext qty={bagajtext(BagajAdd.hand)} comment={1}>
              {bagajtext(BagajAdd.hand)}
            </HandBagajImgtext>
          </HandBagajDiv>
          <MainBagajDiv size={size}>
            <MainBagajImgDiv>
              <MainBagajImg
                size={size}
                qty={bagajtext(BagajAdd.main)}
                src={main_red_bagaja(bagajtext(Bagaj.main), 1)}
                comment={1}
              />
            </MainBagajImgDiv>
            <MainBagajImgtext qty={bagajtext(BagajAdd.main)} comment={1}>
              {bagajtext(BagajAdd.main)}
            </MainBagajImgtext>
          </MainBagajDiv>
          <BagajeDivAddPrice>
            {"- " + pricevalue(BagajAdd.price.toString()) + " ₽"}
          </BagajeDivAddPrice>
        </BagajeDiv>
      </BagajesDiv>
    );
  } else
    return (
      <BagajesDiv size={size}>
        <BagajeDiv>
          <HandBagajDiv size={size}>
            <HandBagajImgDiv>
              <HandBagajImg
                size={size}
                qty={bagajtext(Bagaj.hand)}
                src={handbagaja}
                comment={1}
              />
            </HandBagajImgDiv>
            <HandBagajImgtext qty={bagajtext(Bagaj.hand)} comment={1}>
              {bagajtext(Bagaj.hand)}
            </HandBagajImgtext>
          </HandBagajDiv>
          <MainBagajDiv size={size}>
            <MainBagajImgDiv>
              <MainBagajImg
                size={size}
                qty={bagajtext(Bagaj.main)}
                src={main_red_bagaja(bagajtext(Bagaj.main), comment)}
                comment={comment}
              />
            </MainBagajImgDiv>
            <MainBagajImgtext qty={bagajtext(Bagaj.main)} comment={comment}>
              {bagajtext(Bagaj.main)}
            </MainBagajImgtext>
          </MainBagajDiv>{" "}
          {BagajeComment(comment)}
        </BagajeDiv>
      </BagajesDiv>
    );
}

function Providers(props) {
  const provmain = props.providers.prov;
  const provadds = props.providers.provadd;
  const provaddnum = props.providers.provaddnum;
  if (provadds) {
    return (
      <ProvDiv size={props.size}>
        <MainProvDiv size={props.size}>{provmain}</MainProvDiv>
        {provadds.map(provadd => Provadds(props, provadd))}
        {Provaddsnum(props, provaddnum)}
      </ProvDiv>
    );
  } else {
    return (
      <ProvDiv size={props.size}>
        <MainProvDiv size={props.size}>{provmain}</MainProvDiv>
      </ProvDiv>
    );
  }
}

function Provadds(props, provadd) {
  return (
    <AddProvDiv size={props.size}>
      <AddProvDivText>{provadd.name}</AddProvDivText>
      <AddProvDivPrice>
        {pricevalue(provadd.price.toString()) + " ₽"}
      </AddProvDivPrice>
    </AddProvDiv>
  );
}

function Provaddsnum(props, provaddnum) {
  if (provaddnum) {
    return (
      <AddProvDivOther>
        {"+ Еще " + provaddnum + " предложения"}
      </AddProvDivOther>
    );
  } else {
    return "";
  }
}

const LeftCardDiv = styled.div`
  border-right: 1px solid #dddddd;
`;
const RightCardDiv = styled.div`
  width: 100%;
`;

function TicketNumbers(number) {
  if (number) {
    if (number.toString().substr(-1) === 1) {
      return (
        <TicketNumberDiv>Остался {number.toString()} билет</TicketNumberDiv>
      );
    } else {
      return (
        <TicketNumberDiv>Осталось {number.toString()} билета</TicketNumberDiv>
      );
    }
  } else return "";
}

const Time = styled.div`
  display: flex;
  align-items: left;
  flex-wrap: nowrap;
`;

const TimeDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 40px;
  font-size: 28px;
  display: inline;
  color: #323333;
`;

const City = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;

  color: #9ca5a8;
  flex-basis: 33%;
`;
const Date = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;

  color: #9ca5a8;
`;
const Airport = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;

  color: #4a4a4a;
`;

const ToD = styled.div`
  margin-left: 16px;
  text-align: right;
  display: inline;
`;
const Flight = styled.div`
  width: 40%;
  margin-left: 8px;
`;
const FromD = styled.div`
  display: inline;
`;
const SFrom = "Москва";
const STo = "Барселона";
const AirPortFrom = "VKO";
const AirPortTo = "BCN";

const TimeText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #a0b0b9;
`;

const FlightTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  margin-top: 7px;
`;

function CardTabletEnum(props, Card) {
  const size = props.size;
  console.log(Card.to.TimeFrom);
  return (
    <CardDiv size={size} key={Card.id}>
      <LeftCardDiv>
        <Bagaj props={props} bagaj={Card} />
        {TicketNumbers(Card.ticketsnum)}
        {Price(Card.price.toString())}{" "}
        {/* <PriceDiv size={size} val=/>
          {"Купить за " + Price(Card.price.toString()) + " ₽"}
        </PriceDiv> */}
        <Providers size={size} providers={Card} />
      </LeftCardDiv>
      <RightCardDiv>
        <TitleDiv size={size}>
          <RightTitleDiv>
            {Icons(props, Card.from.company, Card.to.company)}
          </RightTitleDiv>
          <LeftTitleDiv>
            {Charter(Card.flighttype)} <LinkImg src={link_img} />
          </LeftTitleDiv>
        </TitleDiv>
        <BodyDiv>
          <FromDiv>
            <FromD>
              <Time>
                <LinkImgDiv>
                  <LinkImg src={pin} pin={1} />
                </LinkImgDiv>
                <TimeDiv>{Card.to.TimeFrom}</TimeDiv>
              </Time>
              <City>{SFrom}</City>
              <Date>{Card.to.DateFrom}</Date>
            </FromD>
            <Flight>
              <FlightTimeDiv>
                <FlightTime>
                  <LinkImg src={take_off} order={45} />
                  <TimeText>
                    {"Всего " + Times(Card.to.FlightTimeH, Card.to.FlightTimeM)}
                  </TimeText>
                  <LinkImg src={take_off} />
                </FlightTime>
                <Polzunok inCard={true} />
                <FlightTime>
                  <Airport>{AirPortFrom}</Airport>
                  <Airport>{AirPortTo}</Airport>
                </FlightTime>
              </FlightTimeDiv>
            </Flight>
            <ToD>
              <Time>
                <TimeDiv>{Card.to.TimeTo}</TimeDiv>
              </Time>
              <City>{STo}</City>
              <Date>{Card.to.DateTo}</Date>
            </ToD>
            {/*
            <LinkImg src={take_off} take_off={true} />
            <TimeText>
              {"Всего " + Times(Card.to.FlightTimeH, Card.to.FlightTimeM)}
            </TimeText>
            <LinkImg src={take_off} take_off={true} order={45} />

            <CircleDiv />
            <LinkImg src={FlightLine} />
            <CircleDiv />
            <City>{SFrom}</City>
            <City>{STo}</City>
            */}
          </FromDiv>
          <ToDiv>
            <FromD>
              <Time>
                <LinkImgDiv>
                  <LinkImg src={pin} />
                </LinkImgDiv>
                <TimeDiv>{Card.from.TimeFrom}</TimeDiv>
              </Time>
              <City>{STo}</City>
              <Date>{Card.from.DateFrom}</Date>
            </FromD>
            <Flight>
              <FlightTimeDiv>
                <FlightTime>
                  <LinkImg src={take_off} order={45} />
                  <TimeText>
                    {"Всего " + Times(Card.to.FlightTimeH, Card.to.FlightTimeM)}
                  </TimeText>
                  <LinkImg src={take_off} />
                </FlightTime>
                <Polzunok inCard={true} />
                <FlightTime>
                  <Airport>{AirPortFrom}</Airport>
                  <Airport>{AirPortTo}</Airport>
                </FlightTime>
              </FlightTimeDiv>
            </Flight>
            <ToD>
              <Time>
                <TimeDiv>{Card.from.TimeTo}</TimeDiv>
              </Time>
              <City>{SFrom}</City>
              <Date>{Card.from.DateTo}</Date>
            </ToD>
          </ToDiv>
        </BodyDiv>
      </RightCardDiv>
      <OpenDiv>
        <OpenImg src={openticket} />
      </OpenDiv>
    </CardDiv>
  );
}

function compareNumbers(a, b) {
  return a.price - b.price;
}

function sortbyprice(arr) {
  var PriceCard;
  PriceCard = arr.sort(compareNumbers);
  return PriceCard;
}
const ButtonDiv = styled.div`
  ${props =>
    props.styl === "Filter" &&
    css`
      margin-right: auto;
      margin-left: auto;

      padding-left: auto;
      padding-right: auto;
      padding-top: 8px;
      padding-bottom: 16px;
      height: 40px;
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.styl === "Up" &&
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
  ${props =>
    props.styl === "Up" &&
    props.size === "desktop" &&
    css`
      display: none;
    `};
`;

const Button = styled.button`
  border: 0;
  ${props =>
    props.styl === "Filter" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      font-size: 14px;
      text-align: center;

      color: #ffffff;
      background: #00acde;
      border-radius: 4px;

      padding-left: auto;
      padding-right: auto;
      padding-top: auto;
      padding-bottom: auto;
      width: 100%;
      height: 40px;
    `};
  ${props =>
    props.styl === "Up" &&
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
      font-weight: 500;
      line-height: 18px;
      font-size: 14px;
      text-align: center;

      color: #ffffff;
    `};
  ${props =>
    props.styl === "Up" &&
    props.size === "desktop" &&
    css`
      display: none;
    `};
`;

function SearchCards(props) {
  const size = props.size;
  sortbyprice(CardContent);
  if (size === "tablet") {
    return (
      <Wrapper size={size}>
        <ButtonDiv size={size} styl="Up">
          <Button size={size} styl="Up">
            <LinkImg src={filter} />
          </Button>
        </ButtonDiv>
        {CardContent.map(CardOne => CardTabletEnum(props, CardOne))}
        <ButtonDiv size={size} styl="Filter">
          <Button
            size={size}
            styl="Filter"
            children="ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!"
          />
        </ButtonDiv>{" "}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper size={size}>
        {CardContent.map(CardOne => CardTabletEnum(props, CardOne))}
        <ButtonDiv size={size} styl="Filter">
          <Button
            size={size}
            styl="Filter"
            children="ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!"
          />
        </ButtonDiv>{" "}
      </Wrapper>
    );
  }
}

export default SearchCards;
