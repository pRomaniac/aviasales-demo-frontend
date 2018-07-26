import React from "react";
import styled, { css } from "styled-components";

const SearchFieldContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const SearchFieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchFieldInputDiv = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 2px;
  padding: 0;
  flex-basis: 100%;
`;

/* const SearchFields = [
  {
    Departure: {},
    Destination: {},
    DateFrom: {},
    DateTo: {},
    Quantity: {}
  }
]; */

const SearchFields = ["1", "2", "3", "4", "5"];

function NumberList() {
  const listItems = SearchFields.map(
    number =>
      // Correct! Key should be specified inside the array.
      //<SearchFieldInputDiv>
      number.toString()
    //</SearchFieldInputDiv>
  );
  return listItems;
}

console.log(NumberList);

function SearchField(props) {
  return (
    <SearchFieldContainer>
      <SearchFieldRow>
        {SearchFields.map(number => (
          // Correct! Key should be specified inside the array.
          <SearchFieldInputDiv key={number.toString()}>
            {number.toString()}
          </SearchFieldInputDiv>
        ))}
      </SearchFieldRow>
    </SearchFieldContainer>
  );
}

export default SearchField;
