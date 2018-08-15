import React from "react";
import styled, { css } from "styled-components";

import compas from "../img/Compas.svg";

const Compas = styled.div`
  padding-top: 56px;
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 40px;
    `};
`;

const CompasImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function CompasDiv(props) {
  return (
    <Compas props={props}>
      <CompasImg props={props} src={compas} />
    </Compas>
  );
}

export default CompasDiv;
