import React from "react";
import styled, { css } from "styled-components";

const SearchFieldContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  /*
  ${props =>
    props.size === "mobile" &&
    css`
      width: 320px;
      min-width: 320px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 624px;
      min-width: 624px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 1200px;
      min-width: 1200px;
    `};
    */
`;

const SearchFieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchFieldInputDiv = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 0px;
  padding: 0;

  ${(
    props //mobile state
  ) =>
    props.size === "mobile" &&
    props.searchtype === "Departure" &&
    css`
      flex-basis: 100%;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 100%;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 50%;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 50%;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 100%;
    `};

  ${(
    props //tablet state
  ) =>
    props.size === "tablet" &&
    props.searchtype === "Departure" &&
    css`
      flex-basis: 50%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 50%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 25%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 25%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 50%;
    `};
  ${(
    props //desktop state
  ) =>
    props.size === "desktop" &&
    props.searchtype === "Departure" &&
    css`
      flex-basis: 25%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 25%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 12.5%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 12.5%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 25%;
    `};
`;

const SearchInputWrapper = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 2px;
  padding: 0;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  border: 0px;
  width: 100%;
  line-height: 56px;

  ${(
    props //mobile state
  ) =>
    props.size === "tablet" &&
    props.searchtype === "Departure" &&
    css`
      border-radius: 4px 0px 0 0;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Destination" &&
    css`
      border-radius: 0px 4px 0 0;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateFrom" &&
    css`
      border-radius: 0px 0px 0px 4px;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateTo" &&
    css`
      border-radius: 0 0 0px 0px;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Quantity" &&
    css`
      border-radius: 0 0 4px 0px;
    `};

  ${(
    props //tablet state
  ) =>
    props.size === "mobile" &&
    props.searchtype === "Departure" &&
    css`
      border-radius: 4px 4px 0 0;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "Destination" &&
    css`
      border-radius: 0 0 0 0;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "DateFrom" &&
    css`
      border-radius: 0 0 0 0;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "DateTo" &&
    css`
      border-radius: 0 0 0 0;
    `};

  ${props =>
    props.size === "mobile" &&
    props.searchtype === "Quantity" &&
    css`
      border-radius: 0 0 4px 4px;
    `};
  ${(
    props //desktop state
  ) =>
    props.size === "desktop" &&
    props.searchtype === "Departure" &&
    css`
      border-radius: 4px 0px 0px 4px;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Destination" &&
    css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateFrom" &&
    css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateTo" &&
    css`
      border-radius: 0 0 0px 0px;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Quantity" &&
    css`
      border-radius: 0 4px 4px 0px;
    `};
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

const SearchFields = [
  "Departure",
  "Destination",
  "DateFrom",
  "DateTo",
  "Quantity"
];

function SearchField(props) {
  return (
    <SearchFieldContainer size={props.size}>
      <SearchFieldRow>
        {SearchFields.map(number => (
          <SearchFieldInputDiv
            key={number.toString()}
            size={props.size}
            searchtype={number.toString()}
          >
            <SearchInputWrapper>
              <SearchInput
                className={number.toString() + " " + props.size}
                size={props.size}
                searchtype={number.toString()}
              />
            </SearchInputWrapper>
          </SearchFieldInputDiv>
        ))}
      </SearchFieldRow>
    </SearchFieldContainer>
  );
}

export default SearchField;
