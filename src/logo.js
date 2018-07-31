import React from "react";
import styled, { css } from "styled-components";

const LogoWrapper = styled.div`
  display: block;
  padding-top: 12px;

  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 8px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 96px;
    `};
`;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  ${"" /* ${props =>
    props.size === "mobile" &&
    css`
      padding-right: 6px;
      padding-top: 12px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-right: 8px;
      padding-top: 12px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      padding-right: 98px;
      padding-top: 12px;
    `}; */};
`;

const ImgTitle = styled.div`
  margin-left: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
`;

function Logo(props) {
  if (props.size !== "mobile") {
    return (
      <LogoWrapper size={props.size}>
        <Img
          src={props.src}
          alt={props.alt}
          className={props.className}
          size={props.size}
        />
        <ImgTitle>{props.imgtitle}</ImgTitle>
      </LogoWrapper>
    );
  } else {
    return (
      <LogoWrapper size={props.size}>
        <Img src={props.src} alt={props.alt} className={props.className} />
      </LogoWrapper>
    );
  }
}
export default Logo;
