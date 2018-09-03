import React from "react";

import aero from "../img/aero.svg";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
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
      margin-top: 8px;
      margin-bottom: 8px;
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
      margin-bottom: 8px;
      margin-top: 8px;
      flex-wrap: nowrap;
    `};
`;

const SearchInputWrapper = styled.div`
  box-sizing: border-box;
  border: 0;
  padding: 0;
  margin-top: 2px;
  margin-left: 2px;
`;

const SearchButtonDiv = styled.div`
  ${props =>
    !props.search &&
    css`
      margin-left: auto;
      margin-right: auto;
    `};
  ${props =>
    props.size === "tablet" &&
    props.search &&
    css`
      flex-basis: 25%;
      box-sizing: border-box;
    `};
  ${props =>
    props.size === "desktop" &&
    props.search &&
    css`
      flex-basis: 16%;
      margin-left: 8px;
    `};
`;

const SearchButton = styled.button`
  box-sizing: border-box;

  background: #ff9241;

  border: 0;

  padding: 15px 74px 16px 45px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  ${props =>
    props.size === "mobile" &&
    css`
      margin-top: 16px;
      padding: 14px 74px 13px 52px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-top: 32px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-top: 48px;
    `};
  ${props =>
    !props.search &&
    css`
      border-radius: 4px;
    `};

  ${props =>
    props.search &&
    css`
      display: block;
      margin-top: auto;
      box-sizing: border-box;
      border: 0;

      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 20px;
      padding: 15px 29px 16px 29px;
      color: #ffffff;
    `};
  ${props =>
    props.search &&
    props.size === "tablet" &&
    css`
      display: block;
      margin-top: auto;
      box-sizing: border-box;
      border: 0;
      ${"" /*       margin: 2px; */} padding: 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 20px;
      width: 100%;
      padding: 15px 26px 16px 26px;
      margin-left: 0px;
      color: #ffffff;
    `};
`;
const MyLink = styled(NavLink)`
  text-decoration: none;
  ${props =>
    props.size === "desktop" &&
    css`
      top: 2px;
      left: 2px;
      position: relative;
    `};
`;

/* `
  text-decoration: none;
`;
 */

const AeroImg = styled.img`
  position: relative;

  ${props =>
    props.size === "mobile" &&
    css`
      left: 16px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      left: 24px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      left: 24px;
    `};
`;

const ButtonInLink = styled.div`
  display: block;
  margin-top: 2px;
  margin-left: 2px;
  box-sizing: border-box;
`;

const SearchButtonText = styled.div`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  color: #ffffff;

  ${props =>
    props.size === "desktop" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      font-size: 20px;

      color: #ffffff;
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
            className={number.toString() + "_" + props.size}
            key={number.toString()}
            size={props.size}
            searchtype={number.toString()}
          >
            <SearchInputWrapper
              className={number.toString() + "_" + props.size}
            >
              <SearchInput
                className={number.toString() + "Input " + props.size}
                size={props.size}
                searchtype={number.toString()}
              />
              <SearchFieldDecorations size={props.size} typ={number} />
            </SearchInputWrapper>
          </SearchFieldInputDivStart>
        ))}
      </SearchFieldRow>
      <SearchButtonDiv size={props.size} className="SearchButtonDiv">
        <MyLink
          to="/Search"
          activeStyle={{ textDecoration: "none" }}
          activeClassName="selected"
        >
          <SearchButton size={props.size} className="SearchButton">
            <SearchButtonText size={props.size} className="SearchButton">
              Найти билеты
            </SearchButtonText>
            <AeroImg className="AeroImg" src={aero} size={props.size} />
          </SearchButton>
        </MyLink>
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
            className={number.toString() + "InputDiv " + props.size}
            key={number.toString()}
            size={props.size}
            searchtype={number.toString()}
          >
            <SearchInputWrapper
              className={number.toString() + "_" + props.size}
            >
              <SearchInput
                className={number.toString() + "Input " + props.size}
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
          <MyLink to="/Search">
            <ButtonInLink>
              <SearchButton
                size={props.size}
                search={true}
                className="SearchButton"
              >
                <SearchButtonText
                  size={props.size}
                  search={true}
                  className="SearchButton"
                >
                  Найти билеты
                </SearchButtonText>
              </SearchButton>
            </ButtonInLink>
          </MyLink>
        </SearchButtonDiv>
      </SearchFieldRow>
    </SearchFieldContainer>
  );
}

function HeaderRouter(props) {
  if (props.search) {
    return SearchFieldSearch(props);
  } else {
    return SearchFieldStart(props);
  }
}

export default HeaderRouter;
