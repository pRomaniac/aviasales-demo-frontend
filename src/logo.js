import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: block;
  padding-right: 6px;
  padding: 12px;
`;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
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
      <LogoWrapper>
        <Img src={props.src} alt={props.alt} className={props.className} />
        <ImgTitle>{props.imgtitle}</ImgTitle>
      </LogoWrapper>
    );
  } else {
    return (
      <LogoWrapper>
        <Img src={props.src} alt={props.alt} className={props.className} />
      </LogoWrapper>
    );
  }
}
export default Logo;
