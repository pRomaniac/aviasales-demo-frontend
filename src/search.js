import React from "react";
import styled, { css } from "styled-components";
import aero from "./img/aero.svg";
import arrows from "./arrow.svg";

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
  box-sizing: border-box;
  width: 308px;
  background: #ff9241;
  border-radius: 4px;
  border: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;

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

const AeroImg = styled.img`
  vertical-align: middle;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 16px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 24px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 24px;
    `};
`;

const SearchFields = [
  "Departure",
  "Destination",
  "DateFrom",
  "DateTo",
  "Quantity"
];

const SearchFieldDecor = styled.div`
  display: flex;
  /* width: 100%; */
  margin-top: -38px;
  z-index: 2;
  margin-bottom: 19px;

  justify-content: space-between;
`;

const SearchFieldInputDivText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  margin-left: 16px;
  /* text-align: center; */
  color: #4a4a4a;
`;

const SearchFieldInputDivImg = styled.img`
  margin-right: 16px;
`;

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
            <SearchInputWrapper
              className={number.toString() + " " + props.size}
            >
              <SearchInput
                className={number.toString() + " " + props.size}
                size={props.size}
                searchtype={number.toString()}
              />
              <SearchFieldDecor
                className={number.toString() + " " + props.size}
              >
                <SearchFieldInputDivText
                  className={number.toString() + " " + props.size}
                >
                  Москва
                </SearchFieldInputDivText>
                <SearchFieldInputDivImg
                  className={number.toString() + " " + props.size}
                  src={arrows}
                />
              </SearchFieldDecor>
            </SearchInputWrapper>
          </SearchFieldInputDiv>
        ))}
      </SearchFieldRow>
      <SearchButtonDiv size={props.size}>
        <SearchButton size={props.size}>
          Найти билеты <AeroImg src={aero} size={props.size} />
        </SearchButton>
      </SearchButtonDiv>
    </SearchFieldContainer>
  );
}

export default SearchField;
