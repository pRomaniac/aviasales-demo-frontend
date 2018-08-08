import React from "react";
import styled, { css } from "styled-components";

import DeptPen from "../img/Departure_Pen.svg";

const PopDest = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
  width: 437px;
  color: #4a4a4a;
  margin-top: 20px;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 24px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      font-size: 18px;
      text-align: center;
      width: 288px;
    `};
`;
const DepartureCity = "Москва";

const DepartureCityDiv = styled.a`
  color: #00ace2;
  text-decoration: none;
  ${props =>
    props.size === "mobile" &&
    css`
      display: block;
    `};
`;
const DeparturePen = styled.img``;
function PopDestinations(props) {
  return (
    <PopDest size={props.size}>
      Популярные направления перелетов из города{" "}
      <DepartureCityDiv size={props.size} href="#">
        {DepartureCity} <DeparturePen src={DeptPen} size={props.size} />
      </DepartureCityDiv>
    </PopDest>
  );
}

export default PopDestinations;
