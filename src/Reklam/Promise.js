import React from "react";
import styled, { css } from "styled-components";

const text =
  "Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.";

const DepartPromisWrapper = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 72px;
      margin-right: 72px;
    `};
  ${props => props.size === "desktop" && css``};
`;

const Promis = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  color: #4a4a4a;
  ${props =>
    !(props.size === "mobile") &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 26px;
      font-size: 16px;
      text-align: center;

      color: #4a4a4a;
    `};

  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 20px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-top: 80px;
    `};
`;

const NonOfferta = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 14px;
      text-align: center;

      color: #a0b0b9;
      margin-top: 24px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 14px;
      text-align: center;

      color: #a0b0b9;

      margin-top: 16px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
      font-size: 14px;
      text-align: center;

      color: #a0b0b9;

      margin-top: 16px;
    `};
`;

function Primises(props) {
  return (
    <DepartPromisWrapper size={props.size} className="DepartPromisWrapper">
      <Promis size={props.size} className="Promis">
        {text}
      </Promis>
      <NonOfferta className="NonOfferta" size={props.size}>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </NonOfferta>
    </DepartPromisWrapper>
  );
}

export default Primises;
