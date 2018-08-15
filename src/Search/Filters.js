import React from "react";
import styled, { css } from "styled-components";

import polzunok from "../img/polzunok.svg";
import Plane from "../img/Plane.svg";
import open from "../img/Open.svg";
import close from "../img/Close.svg";
import checked from "../img/checked.png";

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
const Block = styled.div``;
const MainBlock = styled.div`
  border-bottom: 1px solid #dddddd;
`;
const Container = styled.div``;
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
`;
const BlockHeaderImg = styled.img`

  src=${props => props.src}

  margin-left:16px;
`;
const BlockHeaderText = styled.div`
  display: inline;
  margin-left: 6px;
  text-transform: uppercase;
`;

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
    <List props={props}>
      <CheckingDiv checked={checked} />
      <ListTextDiv>
        <ListText>{items.name.toString()}</ListText>
        <ListPrice>{pricevalue(items.price)}</ListPrice>
      </ListTextDiv>
    </List>
  );
}

function Peresadki(props) {
  const all = false;
  console.log(Filtres.peresadki.objects.map(obj => console.log(obj)));
  return (
    <MainBlock>
      <Block>
        <BlockHeader>
          <BlockHeaderImg src={open} />
          <BlockHeaderText>{Filtres.peresadki.name.toString()}</BlockHeaderText>
        </BlockHeader>
        {Filtres.peresadki.objects.map(obj => Items(props, obj, all))}
      </Block>
    </MainBlock>
  );
}

function AirCompanies(props) {
  const all = true;
  console.log(Filtres.peresadki.objects.map(obj => console.log(obj)));
  return (
    <MainBlock>
      <BlockHeader>
        <BlockHeaderImg src={open} />
        <BlockHeaderText>Авиакомпании</BlockHeaderText>
        <BlockCount>43</BlockCount>
      </BlockHeader>
      <AirCompaniesInfoBlock>
        <List props={props}>
          <CheckingDiv checked={false} />
          <ListTextDiv>
            <ListText>Несколько авиакомпаний</ListText>
          </ListTextDiv>
        </List>
        <InfoText>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями,включая выбранную
        </InfoText>
      </AirCompaniesInfoBlock>
      <Block>
        <SubBlockText>{Filtres.aliancies.name.toString()}</SubBlockText>
        {Filtres.aliancies.objects.map(obj => Items(props, obj, all))}
      </Block>
      <Block>
        <SubBlockText>{Filtres.companies.name.toString()}</SubBlockText>
        {Filtres.companies.objects.map(obj => Items(props, obj, all))}
      </Block>
    </MainBlock>
  );
}

function DateTimeFlight(props) {
  return (
    <MainBlock>
      <Block>
        <BlockHeader>
          <BlockHeaderImg src={close} />
          <BlockHeaderText>ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ</BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function Bagaj(props) {
  return (
    <MainBlock>
      <Block>
        <BlockHeader>
          <BlockHeaderImg src={close} />
          <BlockHeaderText>БАГАЖ</BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function TransferTime(props) {
  return (
    <MainBlock>
      <Block>
        <BlockHeader>
          <BlockHeaderImg src={close} />
          <BlockHeaderText>Длительность пересадки</BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function FlightTime(props) {
  return (
    <MainBlock>
      <Block>
        <BlockHeader>
          <BlockHeaderImg src={close} />
          <BlockHeaderText>Время в пути</BlockHeaderText>
        </BlockHeader>
      </Block>
    </MainBlock>
  );
}

function Filter(props) {
  return (
    <Wrapper size={props.size}>
      <Peresadki />
      <DateTimeFlight departure />
      <Bagaj> </Bagaj>
      <TransferTime />
      <FlightTime />
      <AirCompanies />
      {/*       <AirPorts />
      <TransferAirports />
      <Agencies />
      <Reset />  */}
    </Wrapper>
  );
}

export default Filter;
