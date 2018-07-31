import React from "react";
import styled, { css } from "styled-components";

const SearchFieldContainer = styled.form`
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
  ${props =>
    props.size === "mobile" &&
    css`
      margin: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin: 96px;
    `};
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
      flex-basis: 41.66%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 41.66%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 20.83%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 20.83%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 41.66%;
    `};
  ${(
    props //desktop state
  ) =>
    props.size === "desktop" &&
    props.searchtype === "Departure" &&
    css`
      flex-basis: 18.1%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 18.1%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 14.5%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 14.5%;
    `};

  ${props =>
    props.size === "desktop" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 18.1%;
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
const SearchButtonDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 308px;
`;

const SearchButton = styled.button`
  width: 308px;
  background: #ff9241;
  border-radius: 4px;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 16px;
      height: 56px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-top: 32px;
      height: 64px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-top: 48px;
      height: 64px;
    `};
`;

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
      <SearchFieldRow size={props.size}>
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
      <SearchButtonDiv size={props.size}>
        <SearchButton size={props.size} />
      </SearchButtonDiv>
    </SearchFieldContainer>
  );
}

export default SearchField;
