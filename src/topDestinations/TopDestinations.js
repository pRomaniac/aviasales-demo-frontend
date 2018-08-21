import React from "react";
import styled /* , { css }  */ from "styled-components";

import Compas from "./Compas";
import PopDestinations from "./PopularDestinations";
import CategoriesDestinations from "./Navigations";
import TopDestinationsCards from "./TopDestinationsCards";

const TopDestinationsDiv = styled.div`
  background: #f8fcff;
`;

function TopDestinations(props) {
  return (
    <TopDestinationsDiv className="TopDestinationsDiv">
      <Compas size={props.size} className="Compas" />
      <PopDestinations size={props.size} className="PopDestinations" />
      <CategoriesDestinations
        size={props.size}
        className="CategoriesDestinations"
      />
      <TopDestinationsCards
        size={props.size}
        className="TopDestinationsCards"
      />
    </TopDestinationsDiv>
  );
}

export default TopDestinations;
