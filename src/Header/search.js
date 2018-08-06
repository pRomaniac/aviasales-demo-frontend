import React from "react";
import styled, { css } from "styled-components";
import aero from "../img/aero.svg";

import SearchFieldInputDiv from "./SearchFieldInputDiv";
import SearchInput from "./SearchInput";
import SearchFieldDecorations from "./SearchFieldDecorations";

const SearchFieldContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
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

const SearchInputWrapper = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 2px;
  padding: 0;
`;

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

function SearchField(props) {
  return (
    <SearchFieldContainer size={props.size}>
      <SearchFieldRow size={props.size}>
        {SearchFields.map(number => (
          <SearchFieldInputDiv
            className={number.toString() + " " + props.size}
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
              <SearchFieldDecorations size={props.size} typ={number} />
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
