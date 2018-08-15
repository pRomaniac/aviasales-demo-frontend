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
      <Wrapper size={size}>
        {/*         {CardContent.map(CardOne => CardDesktopEnum(props, CardOne))} */}
        <FilterVertDiv>
          <Filters />
        </FilterVertDiv>
        <Cards>
          <CardsTablet props={props} />
        </Cards>
      </Wrapper>
    );
  }
}

export default SearchCards;
