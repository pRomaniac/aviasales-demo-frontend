/* import React from "react"; */
import styled, { css } from "styled-components";

const SearchInput = styled.input`
  box-sizing: border-box;
  border: 0px;
  width: 100%;
  line-height: 56px;

  ${(
    props //tablet state
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
    props //mobile state
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

export default SearchInput;
