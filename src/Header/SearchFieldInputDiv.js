/* import React from "react"; */
import styled, { css } from "styled-components";

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

export default SearchFieldInputDiv;
