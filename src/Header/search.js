import React from "react";
import styled, { css } from "styled-components";
import aero from "../img/aero.svg";
import { Link } from "react-router-dom";
import SearchFieldInputDivStart from "./SearchFieldInputDivStart";
import SearchFieldInputDivSearch from "./SearchFieldInputDivSearch";
import SearchInput from "./SearchInput";
import SearchFieldDecorations from "./SearchFieldDecorations";

const SearchFieldContainer = styled.form`
  ${"" /*   margin-left: auto;
  margin-right: auto; */};
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
    !props.search &&
    css`
      margin: 96px;
    `};
  ${props =>
    props.size === "desktop" &&
    props.search &&
    css`
      margin: 8px;
    `};
`;

const SearchInputWrapper = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 2px;
  padding: 0;
`;

const SearchButtonDiv = styled.div`
  ${props =>
    !props.search &&
    css`
      margin-left: auto;
      margin-right: auto;
      width: 308px;
    `};
  ${props =>
    props.size === "tablet" &&
    props.search &&
    css`
      flex-basis: 24%;
    `};
  ${props =>
    props.size === "desktop" &&
    props.search &&
    css`
      flex-basis: 16%;
    `};
`;

const SearchButton = styled.button`
  box-sizing: border-box;

  background: #ff9241;

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
  ${props =>
    !props.search &&
    css`
      width: 308px;
      border-radius: 4px;
    `};

  ${props =>
    props.search &&
    css`
      margin-top: auto;
      box-sizing: border-box;
      border: 0;
      margin: 2px;
      padding: 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 20px;
      width: 98%;
      height: 58px;
      color: #ffffff;
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

function SearchFieldStart(props) {
  return (
    <SearchFieldContainer
      className="SearchFieldContainer"
      size={props.size}
      action="/Search"
    >
      <SearchFieldRow size={props.size} className="SearchFieldRow">
        {SearchFields.map(number => (
          <SearchFieldInputDivStart
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
          </SearchFieldInputDivStart>
        ))}
      </SearchFieldRow>
      <SearchButtonDiv size={props.size} className="SearchButtonDiv">
        <Link to="/Search">
          <SearchButton size={props.size} className="SearchButton">
            Найти билеты
            <AeroImg className="AeroImg" src={aero} size={props.size} />
          </SearchButton>
        </Link>
      </SearchButtonDiv>
    </SearchFieldContainer>
  );
}

function SearchFieldSearch(props) {
  return (
    <SearchFieldContainer
      size={props.size}
      action="/Search"
      className="SearchFieldContainer"
    >
      <SearchFieldRow
        size={props.size}
        search={true}
        className="SearchFieldRow"
      >
        {SearchFields.map(number => (
          <SearchFieldInputDivSearch
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
                search={true}
              />
              <SearchFieldDecorations size={props.size} typ={number} />
            </SearchInputWrapper>
          </SearchFieldInputDivSearch>
        ))}
        <SearchButtonDiv
          size={props.size}
          search={true}
          className="SearchButtonDiv"
        >
          <Link to="/Search">
            <SearchButton
              size={props.size}
              search={true}
              className="SearchButton"
            >
              Найти билеты
            </SearchButton>
          </Link>
        </SearchButtonDiv>
      </SearchFieldRow>
    </SearchFieldContainer>
  );
}

function HeaderRouter(props) {
  console.log(props);
  if (props.search) {
    return SearchFieldSearch(props);
  } else {
    return SearchFieldStart(props);
  }
}

export default HeaderRouter;
