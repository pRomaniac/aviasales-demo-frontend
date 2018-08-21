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
    <FooterDiv size={props.size} className={"AllReklamFooterDiv"}>
      <BestPrices size={props.size} className={"AllReklamBestPrices"} />
      <Promis size={props.size} className={"AllReklamPromis"} />
      <Reklam size={props.size} className={"AllReklamReklam"} />
      <SpecOffers size={props.size} className={"AllReklamSpecOffers"} />
    </FooterDiv>
  );
}

export default Footer;
