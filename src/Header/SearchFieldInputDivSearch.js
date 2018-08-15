/* import React from "react"; */
import styled, { css } from "styled-components";

const SearchFieldInputDivSearch = styled.div`
  box-sizing: border-box;
  border: 0;
  margin: 0px;
  padding: 0;

  ${(
    props //tablet state
  ) =>
    props.size === "tablet" &&
    props.searchtype === "Departure" &&
    css`
      flex-basis: 48%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Destination" &&
    css`
      flex-basis: 48%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateFrom" &&
    css`
      flex-basis: 24%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "DateTo" &&
    css`
      flex-basis: 24%;
    `};

  ${props =>
    props.size === "tablet" &&
    props.searchtype === "Quantity" &&
    css`
      flex-basis: 24%;
    `};
  ${props =>
    props.size === "tablet" &&
    props.searchtype === "button" &&
    css`
      flex-basis: 24%;
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

export default SearchFieldInputDivSearch;
