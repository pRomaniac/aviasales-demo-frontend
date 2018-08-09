import React from "react";
import styled, { css } from "styled-components";

import BestPrices from "./BestPrices";
import Promis from "./Promise";
import SpecOffers from "./SpecialOffers";
const FooterDiv = styled.div`
  padding: 0;
`;

function Footer(props) {
  return (
    <FooterDiv size={props.size}>
      <BestPrices size={props.size} />
      <Promis size={props.size} />
      <SpecOffers size={props.size} />
    </FooterDiv>
  );
}

export default Footer;
