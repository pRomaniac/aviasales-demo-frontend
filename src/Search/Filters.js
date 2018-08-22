import React from "react";
import styled, { css } from "styled-components";

import Plane from "../img/Plane.svg";
import open from "../img/Open.svg";
import close from "../img/Close.svg";
import checked from "../img/checked.png";
import clear from "../img/clear.svg";
import Filtres from "./FilterObject";
function pricevalue(val) {
  if (val) {
    return val.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + " ₽";
  } else {
    return "";
  }
}
const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  ${"" /*  margin-top: 56px; */} margin-left: 98px;
  margin-right: 16px;
  width: 300px;
`;

const PlaneImg = styled.img`
  src=${props => props.src};
    margin-right: 5px;
    margin-left: 5px;
`;

const Block = styled.div``;
const MainBlock = styled.div`
  border-bottom: 1px solid #dddddd;
  padding-bottom: 0px;

  ${props =>
    props.open &&
    css`
      padding-bottom: 24px;
    `};
`;

const List = styled.div`
  display: flex;
  padding-left: 16px;
`;
const BlockHeader = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;

  color: #5b5b5c;

  padding-top: 16px;
  padding-bottom: 17px;
  padding-left: 16px;

  vertical-align: middle;

  ${props =>
    props.reset &&
    css`
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 6px;
      display: flex;
      justify-content: space-between;
    `};
  ${props =>
    props.first &&
    css`
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 6px;
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      padding-bottom: 17px;
      padding-left: 16px;
    `};
`;
const BlockHeaderImg = styled.img`

  src=${props => props.src}

  margin-left:16px;

  ${props =>
    props.clear &&
    css`
      margin-right: 16px;
    `}
`;

const BlockHeaderText = styled.div`
  display: inline;
  margin-left: 6px;
  text-transform: uppercase;
  ${props =>
    props.reset &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 52px;
      font-size: 12px;
      color: #00bde4;
    `};
`;

const PolzunokDiv = styled.div`
  display: flex;
  width: 100%;
  margin-right: 16px;
`;

const PolzunokDivCircle = styled.div`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
`;

const PolzunokLineTop = styled.div`
  width: 100%;
  height: 8px;
  border-bottom: 1px solid #00acde;
`;

const PolzunokLineBottom = styled.div`
  width: 100%;
  height: 8px;
  border-top: 1px solid #00acde;
`;

const PolzunokLine = styled.div`
  width: 100%;
`;

function PolzunokHtml() {
  return (
    <PolzunokDiv className={"SearchPolzunokDiv"}>
      <PolzunokDivCircle className={"SearchPolzunokDivCircle"} />
      <PolzunokLine className={"SearchPolzunokLine"}>
        <PolzunokLineTop className={"SearchPolzunokLineTop"} />
        <PolzunokLineBottom className={"SearchPolzunokLineBottom"} />
      </PolzunokLine>
      <PolzunokDivCircle className={"SearchPolzunokDivCircle"} />
    </PolzunokDiv>
  );
}

const CheckingDiv = styled.div`
  background: #ffffff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 4px;
  width: 18px;
  height: 18px;
  margin-top: auto;
  margin-bottom: auto;

  ${props =>
    props.checked &&
    css`
      background: #e1f8ff;
      border: 1px solid #00ace2;
      box-sizing: border-box;
      border-radius: 4px;
      background-image: url(${checked});
      background-repeat: no-repeat;
      background-position: center;
    `};
`;

const ListTextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 6px;
`;

const ListText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  margin-right: 16px;

  color: #4a4a4a;
`;
const ListPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;

  margin-right: 16px;
`;

const BlockCount = styled.div`
  display: inline;
  margin-left: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;

  color: #a0b0b9;
`;

const SubBlockText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;

  padding-left: 16px;
  margin-top: 16px;
  margin-bottom: 8px;

  ${props =>
    props.list_header &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 18px;
      font-size: 12px;

      color: #323333;
    `};
`;

const InfoText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;

  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
`;

const AirCompaniesInfoBlock = styled.div``;

function Items(props, items, all) {
  var checked;
  if (!all) {
    checked = false;
  } else {
    checked = true;
  }

  if (items.name.toString() === "1 пересадка") {
    checked = true;
  }
  return (
    <List props={props} className={"SearchList"} key={Items.name + items.price}>
      <CheckingDiv checked={checked} className={"SearchCheckingDiv"} />
      <ListTextDiv className={"SearchListTextDiv"}>
        <ListText className={"SearchListText"}>
          {items.name.toString()}
        </ListText>
        <ListPrice className={"SearchListPrice"}>
          {pricevalue(items.price)}
        </ListPrice>
      </ListTextDiv>
    </List>
  );
}

const FirstHeaderTxt = styled.div``;

function Peresadki(props) {
  const all = false;
  return (
    <MainBlock className={"SearchMainBlock"} open={true}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"} first={true}>
          <FirstHeaderTxt className={"SearchFirstHeaderTxt"}>
            <BlockHeaderImg className={"SearchBlockHeaderImg"} src={open} />
            <BlockHeaderText className={"SearchBlockHeaderText"}>
              {Filtres.peresadki.name.toString()}
            </BlockHeaderText>
          </FirstHeaderTxt>
          {/*           <FirstHeaderTxt className={"SearchFirstHeaderTxt"} /> */}
          <BlockHeaderImg
            className={"SearchBlockHeaderImg"}
            src={clear}
            clear
          />
        </BlockHeader>
        {Filtres.peresadki.objects.map(obj => Items(props, obj, all))}
      </Block>
    </MainBlock>
  );
}

function AirCompanies(props) {
  const all = true;
  return (
    <MainBlock open={true} className={"SearchMainBlock"}>
      <BlockHeader className={"SearchBlockHeader"}>
        <BlockHeaderImg className={"SearchBlockHeaderImg"} src={open} />
        <BlockHeaderText className={"SearchBlockHeaderText"}>
          Авиакомпании
        </BlockHeaderText>
        <BlockCount className={"SearchBlockCount"}>43</BlockCount>
      </BlockHeader>
      <AirCompaniesInfoBlock className={"SearchAirCompaniesInfoBlock"}>
        <List className={"SearchList"} props={props}>
          <CheckingDiv className={"SearchCheckingDiv"} checked={false} />
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>
              Несколько авиакомпаний
            </ListText>
          </ListTextDiv>
        </List>
        <InfoText className={"SearchInfoText"}>
          className=
          {"SearchListText"}
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями,включая выбранную
        </InfoText>
      </AirCompaniesInfoBlock>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          {Filtres.aliancies.name.toString()}
        </SubBlockText>
        {Filtres.aliancies.objects.map(obj => Items(props, obj, all))}
      </Block>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          {Filtres.companies.name.toString()}
        </SubBlockText>
        {Filtres.companies.objects.map(obj => Items(props, obj, all))}
      </Block>
    </MainBlock>
  );
}

function DateTimeFlight(props) {
  return (
    <MainBlock className={"SearchMainBlock"} open={true}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchSubBlBlockHeaderockText"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Время вылета и прибытия
          </BlockHeaderText>
        </BlockHeader>
      </Block>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          Москва
          <PlaneImg className={"SearchPlaneImg"} src={Plane} />
          Барселона
        </SubBlockText>
        <SubBlockText className={"SearchSubBlockText"} list_header>
          Вылет из Москвы:
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>до 23:45, 24 фев</ListText>
            <ListText className={"SearchListText"}>c 00:05, 24 фев</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
          </ListTextDiv>
        </List>
        <SubBlockText className={"SearchSubBlockText"} list_header>
          Прибытие в Барселону:
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>c 00:05, 24 фев</ListText>
            <ListText className={"SearchListText"}>до 23:45, 24 фев</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
            {/*             <ListText>
              <SliderImg src={polzunok} />

            </ListText> */}
          </ListTextDiv>
        </List>
      </Block>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          Барселона
          <PlaneImg className={"SearchPlaneImg"} src={Plane} />
          Москва
        </SubBlockText>
        <SubBlockText className={"SearchSubBlockText"} list_header>
          Вылет из Барселоны:
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>c 06:00, 3 мар</ListText>
            <ListText className={"SearchListText"}>до 23:45, 3 мар</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
          </ListTextDiv>
        </List>
        <SubBlockText className={"SearchSubBlockText"} list_header>
          Прибытие в Москву::
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>c 15:00, 3 мар</ListText>
            <ListText className={"SearchListText"}>до 09:55, 5 мар</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
          </ListTextDiv>
        </List>
      </Block>
    </MainBlock>
  );
}

function Bagaj(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            багаж
          </BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function TransferTime(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Длительность пересадки
          </BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function AirPorts(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Аэропорты
          </BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function TransferAirports(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Аэропорты пересадки
          </BlockHeaderText>
          <BlockCount className={"SearchBlockCount"}>71</BlockCount>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function Agencies(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={close} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Агенства
          </BlockHeaderText>
          <BlockCount className={"SearchBlockCount"}>26</BlockCount>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function Reset(props) {
  return (
    <MainBlock className={"SearchMainBlock"}>
      <Block className={"SearchBlock"} reset={true}>
        <BlockHeader className={"SearchBlockHeader"} reset={true}>
          <BlockHeaderText className={"SearchBlockHeaderText"} reset={true}>
            сбросить все фильтры
          </BlockHeaderText>
          <BlockHeaderImg
            className={"SearchBlockHeaderImg"}
            src={clear}
            clear
          />
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function FlightTime(props) {
  return (
    <MainBlock className={"SearchMainBlock"} open={true}>
      <Block className={"SearchBlock"}>
        <BlockHeader className={"SearchBlockHeader"}>
          <BlockHeaderImg className={"SearchBlockHeaderImg"} src={open} />
          <BlockHeaderText className={"SearchBlockHeaderText"}>
            Время в пути
          </BlockHeaderText>
        </BlockHeader>
      </Block>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          Москва
          <PlaneImg className={"SearchPlaneImg"} src={Plane} />
          Барселона
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>от 04ч 20м</ListText>
            <ListText className={"SearchListText"}>до 48ч 50м</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
          </ListTextDiv>
        </List>
      </Block>
      <Block className={"SearchBlock"}>
        <SubBlockText className={"SearchSubBlockText"}>
          Барселона
          <PlaneImg src={Plane} className={"SearchPlaneImg"} />
          Москва
        </SubBlockText>
        <List className={"SearchList"} props={props}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <ListText className={"SearchListText"}>от 04ч 10м</ListText>
            <ListText className={"SearchListText"}>до 41ч 20м</ListText>
          </ListTextDiv>
        </List>
        <List className={"SearchList"}>
          <ListTextDiv className={"SearchListTextDiv"}>
            <PolzunokHtml className={"SearchPolzunokHtml"} />
          </ListTextDiv>
        </List>
      </Block>
    </MainBlock>
  );
}

function Filter(props) {
  return (
    <Wrapper className={"SearchWrapper"} size={props.size}>
      <Peresadki className={"SearchPeresadki"} />
      <DateTimeFlight className={"SearchDateTimeFlight"} />
      <Bagaj className={"SearchBagaj"}> </Bagaj>
      <TransferTime className={"SearchTransferTime"} />
      <FlightTime className={"SearchFlightTime"} />
      <AirCompanies className={"SearchAirCompanies"} />
      <AirPorts className={"SearchAirPorts"} />
      <TransferAirports className={"SearchTransferAirports"} />
      <Agencies className={"SearchAgencies"} />
      <Reset className={"SearchReset"} />
    </Wrapper>
  );
}

export default Filter;
