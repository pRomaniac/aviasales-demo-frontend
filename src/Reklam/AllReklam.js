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
    <FooterDiv size={props.size} className={"AllReklam" + "FooterDiv"}>
      <BestPrices size={props.size} className={"AllReklam" + "BestPrices"} />
      <Promis size={props.size} className={"AllReklam" + "Promis"} />
      <Reklam size={props.size} className={"AllReklam" + "Reklam"} />
      <SpecOffers size={props.size} className={"AllReklam" + "SpecOffers"} />
    </FooterDiv>
  );
}

export default Footer;
