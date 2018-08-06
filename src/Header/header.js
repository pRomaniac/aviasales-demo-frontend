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
      padding-bottom: 88px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-bottom: 122px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      padding-bottom: 254px;
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
