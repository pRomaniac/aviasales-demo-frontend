import React from "react";
import styled, { css } from "styled-components";
import Title from "./title";
import Logo from "./logo";
import SearchField from "./search";
const HeaderDiv = styled.div`
  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  ${props =>
    props.size === "mobile" &&
    css`
      width: 320px;
      min-width: 320px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 768px;
      min-width: 768px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 1440px;
      min-width: 1440px;
    `};
`;

function Header(props) {
  return (
    <HeaderDiv size={props.size}>
      <Logo
        size={props.size}
        src={props.src}
        alt={props.alt}
        imgtitle={props.imgtitle}
        className={props.className}
      />
      <Title size={props.size} />
      <SearchField size={props.size} />
    </HeaderDiv>
  );
}
export default Header;
