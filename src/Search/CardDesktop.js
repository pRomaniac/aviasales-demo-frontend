import React from "react";
import styled from "styled-components";
import Filters from "./Filters";

import CardsTablet from "./CardTablet";

const Wrapper = styled.div`
  background: #eaeaea;
  display: flex;
  padding-top: 56px;
`;
const FilterVertDiv = styled.div``;
const Cards = styled.div`
  margin-right: auto;
`;

function SearchCards(props) {
  const size = props.size;
  if (size === "desktop") {
    return (
      <Wrapper size={size} className = "SearchCardsWrapper">
        {/*         {CardContent.map(CardOne => CardDesktopEnum(props, CardOne))} */}
        <FilterVertDiv className = "SearchCardsFilterVertDiv">
          <Filters className = "SearchCardsFilters"/>
        </FilterVertDiv>
        <Cards className = "SearchCardsCards">
          <CardsTablet props={props} className = "SearchCardsCardsTablet"/>
        </Cards>
      </Wrapper>
    );
  }
}

export default SearchCards;
