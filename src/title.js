import React from "react";
import styled, { css } from "styled-components";

const TitleH1 = styled.h1`
  margin-left: auto;
  margin-right: auto;
  top: 88px;
  color: #ffffff;

  ${props =>
    props.size === "mobile" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 20px;
      text-align: center;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: 48px;
      font-size: 32px;
      text-align: center;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: 48px;
      font-size: 40px;
      text-align: center;
    `};
`;

const TitleH2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  ${props =>
    props.size === "desktop" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      text-align: center;
    `};
`;

function Title(props) {
  if (props.size === "mobile") {
    return (
      <div>
        <TitleH1 size={props.size}>Поиск дешевых авиабилетов</TitleH1>
      </div>
    );
  } else {
    return (
      <div>
        <TitleH1 size={props.size}>Поиск дешевых авиабилетов</TitleH1>
        <TitleH2 size={props.size}>
          Лучший способ купить авиабилеты дешево
        </TitleH2>
      </div>
    );
  }
}

export default Title;
