import React from "react";
import styled from "styled-components";

import BestPrices from "./BestPrices";
import Promis from "./Promise";
import SpecOffers from "./SpecialOffers";
import Reklam from "./Reklam";
const FooterDiv = styled.div`
  padding: 0;
`;

function Footer(props) {
  return (
    <FooterDiv size={props.size}>
      <BestPrices size={props.size} />
      <Promis size={props.size} />
      <Reklam size={props.size} />
      <SpecOffers size={props.size} />
    </FooterDiv>
  );
}

export default Footer;
