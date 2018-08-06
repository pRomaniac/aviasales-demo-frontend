import React from "react";
import styled /* , { css }  */ from "styled-components";

import Compas from "./Compas";
import PopDestinations from "./PopularDestinations";
import CategoriesDestinations from "./Navigations";
const TopDestinationsDiv = styled.div`
  background: #f8fcff;
`;

function TopDestinations(props) {
  return (
    <TopDestinationsDiv>
      <Compas size={props.size} />
      <PopDestinations size={props.size} />
      <CategoriesDestinations size={props.size} />
    </TopDestinationsDiv>
  );
}

export default TopDestinations;
