import React from "react";
import styled, { css } from "styled-components";

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
  ${props =>
    props.inCard &&
    css`
      border-bottom: 1px solid #a0b0b9;
    `};
`;

const PolzunokLineBottom = styled.div`
  width: 100%;
  height: 8px;
  border-top: 1px solid #00acde;
  ${props =>
    props.inCard &&
    css`
      border-top: 1px solid #a0b0b9;
    `};
`;

const PolzunokLine = styled.div`
  width: 100%;
`;

function PolzunokHtml(props) {
  return (
    <PolzunokDiv inCard={props.inCard}>
      <PolzunokDivCircle inCard={props.inCard} />
      <PolzunokLine inCard={props.inCard}>
        <PolzunokLineTop inCard={props.inCard} />
        <PolzunokLineBottom inCard={props.inCard} />
      </PolzunokLine>
      <PolzunokDivCircle inCard={props.inCard} />
    </PolzunokDiv>
  );
}

export default PolzunokHtml;
