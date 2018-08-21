import React from "react";
import styled, { css } from "styled-components";

import AeroFlotLogo from "../img/aeroflot_tablet.png";
import S7AirLinesLogo from "../img/s7aitlines_tablet.png";

import OneTwoTripLogo from "../img/onetwotrip_tablet.png";

import KoreanAirLogo from "../img/koreanair-tablet.png";

import XZLogo from "../img/xz_company_tablet.png";

import Twitter from "../img/twitter.svg";
import Facebook from "../img/facebook.svg";
import VKontakte from "../img/vkontakte.svg";
import Rss from "../img/rss.svg";

import Line from "../img/Line.svg";

import Arrow from "../img/ShapeArrow.svg";

const LogoArr = [
  { id: 1, scr: { AeroFlotLogo } },
  { id: 2, scr: { S7AirLinesLogo } },
  { id: 3, scr: { OneTwoTripLogo } },
  { id: 4, scr: { KoreanAirLogo } },
  { id: 5, scr: { XZLogo } }
];
const Wrapper = styled.div`
  display: flex;
`;
const MainWrapper = styled.div``;
const LeftAuto = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;
const RightAuto = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${props =>
    props.size === "desktop" &&
    css`
      display: flex;
    `};
`;

const ReklamDivWrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 28px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-left: 72px;
  margin-right: 72px;
  ${props =>
    props.size === "moblie" &&
    css`
      margin-top: 5px;
    `};
`;

const ReklamTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;

  color: #5c5c5c;
  flex-basis: 100%;

  margin-bottom: 24px;
`;

const ReklamLogoDiv = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

const ReklamLogoImg = styled.img`
  src: url(${props => props.src});
`;

const ReklamLogos = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const NavDotDiv = styled.div`
  width: 100%;
  flex-basis: 100%;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  padding-bottom: 28px;
`;

const NavDot = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
  background: #818181;
  border: 1px solid #818181;
  border-radius: 50px;
  ${props =>
    props.navdotchecked === true &&
    css`
      background: rgba(0, 0, 0, 0.0001);
      border: 1px solid #818181;
      border-radius: 50px;
    `};
`;

const AutoDiscountDiv = styled.div`
  display: flex;
  ${props =>
    props.size === "tablet" &&
    css`
      flex-direction: column;
    `};
`;

const AutoDiscountTextDiv = styled.div`
  margin-bottom: 0px;
  margin-right: auto;
  margin-left: auto;
`;

const AutoDiscountTextHeader = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  max-width: 360px;
  color: #5c5c5c;
  ${props =>
    !(props.size === "desktop") &&
    css`
      text-align: center;
    `};

  ${props =>
    props.notheader === true &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 22px;
      font-size: 16px;

      color: #5c5c5c;
    `};
`;

const SocialButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const SocialButton = styled.img`
  margin-left: 3px;
  margin-right: 3px;
  src: url(${props => props.src});
`;

const InputEmailMainDiv = styled.div`
  width: 100%;
`;

const InputEmailDiv = styled.div`
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  display: flex;
  height: 34px;
  width: 330px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 18px;
`;

const InputEmailText = styled.input`
  line-height: 32px;
  border: none;
  width: 100%;
`;

const InputEmailTextDecorDiv = styled.div`
  margin-top: -27px;
`;
const InputEmailTextDecor = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  z-index: 2;
  color: #a0b0b9;
  margin-left: 13px;
`;

const ButtonDiv = styled.div`
  width: 139px;
  margin-right: 0;
  margin-left: auto;
`;

const Button = styled.button`
  box-sizing: border-box;
  border: 0;
  border-radius: 2px;
  background: #ff8e41;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  height: 34px;
  width: 139px;
  color: #ffffff;
`;

const LineDiv = styled.img`
  height: 7px;
  background-image: url(${Line});
  background-repeat: repeat-x;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftArrow = styled.img`
  margin-left: 8px;
  margin-top: auto;
  margin-bottom: auto;
  width: 18px;
  height: 32px;
  transform: rotate(180deg);
`;

const RightArrow = styled.img`
  width: 18px;
  height: 32px;
  margin-right: 8px;
  margin-top: auto;
  margin-bottom: auto;
`;

function SocialButtons(props) {
  return (
    <SocialButtonsDiv size={props.size} className={"SocialButtonsDiv"}>
      <SocialButton src={Twitter} className={"SocialButtonTwitter"} />
      <SocialButton src={Facebook} className={"SocialButtonFacebook"} />
      <SocialButton src={VKontakte} className={"SocialButtonVKontakte"} />
      <SocialButton src={Rss} className={"SocialButtonRss"} />
    </SocialButtonsDiv>
  );
}

function ReklamLogo(props, logo) {
  return (
    <ReklamLogoDiv size={props.size} key={logo.id} className={"ReklamLogoDiv"}>
      <ReklamLogoImg
        className={"ReklamLogoImg"}
        size={props.size}
        src={logo.scr[Object.keys(logo.scr).toString()]}
      />
    </ReklamLogoDiv>
  );
}

/* function DotCheckedRender(props, i, checked_id) {
  var j = 0;
  while (j <= i) {
    j = j + 1;
    console.log(i);
    console.log(j >= i);
    console.log(j);
    console.log(checked_id === j);
    j = j + 1;
    return (
      <NavDot
        size={props.size}
        navdotchecked={(checked_id === j && true) || false}
      />
    );
  }
} */
const ReklamDiv = styled.div`
  display: flex;
`;
function Reklam(props) {
  if (props.size === "mobile") {
    return "";
  } else {
    return (
      <Wrapper className={"Wrapper"}>
        <MainWrapper className={"MainWrapper"}>
          <ReklamDiv className={"ReklamDiv"}>
            <LeftArrow src={Arrow} className={"LeftArrow"} />
            <ReklamDivWrapper size={props.size} className={"ReklamDivWrapper"}>
              <ReklamTitle className={"ReklamTitle"}>
                Дешевые авиабилеты от крупнейших авиакомпаний и агентств
              </ReklamTitle>
              <ReklamLogos size={props.size} className={"ReklamLogos"}>
                {LogoArr.map(Logo => ReklamLogo(props, Logo))}
              </ReklamLogos>
              {/* <NavDotDiv>{DotCheckedRender(props, 3, 1)}</NavDotDiv> */}
              <NavDotDiv className={"NavDotDiv"}>
                <NavDot
                  className={"NavDot"}
                  size={props.size}
                  navdotchecked={false}
                />
                <NavDot
                  className={"NavDot"}
                  size={props.size}
                  navdotchecked={true}
                />
                <NavDot
                  className={"NavDot"}
                  size={props.size}
                  navdotchecked={true}
                />
              </NavDotDiv>
            </ReklamDivWrapper>
            <RightArrow src={Arrow} />
          </ReklamDiv>
          <LineDiv />

          <AutoDiscountDiv size={props.size} className={"AutoDiscountDiv"}>
            <LeftAuto className={"LeftAuto"} size={props.size}>
              <AutoDiscountTextDiv
                className={"AutoDiscountTextDiv"}
                size={props.size}
              >
                <AutoDiscountTextHeader
                  className={"AutoDiscountTextHeader"}
                  size={props.size}
                  notheader={false}
                >
                  Хотите знать всё о скидках на авиабилеты?
                </AutoDiscountTextHeader>
                <AutoDiscountTextHeader
                  className={"AutoDiscountTextHeader"}
                  size={props.size}
                  notheader={true}
                >
                  Вы можете подписаться на нашу рассылку через соцсети или по
                  электронной почте.
                </AutoDiscountTextHeader>
              </AutoDiscountTextDiv>
            </LeftAuto>
            <RightAuto className={"RightAuto"} size={props.size}>
              {SocialButtons(props)}
              <InputEmailDiv className={"InputEmailDiv"}>
                <InputEmailMainDiv className={"InputEmailMainDiv"}>
                  <InputEmailText className={"InputEmailText"} />
                  <InputEmailTextDecorDiv className={"InputEmailTextDecorDiv"}>
                    <InputEmailTextDecor className={"InputEmailTextDecor"}>
                      Ваш Email
                    </InputEmailTextDecor>
                  </InputEmailTextDecorDiv>
                </InputEmailMainDiv>
                <ButtonDiv className={"ButtonDiv"}>
                  <Button className={"Button"}>Подписаться</Button>
                </ButtonDiv>
              </InputEmailDiv>
            </RightAuto>
          </AutoDiscountDiv>
        </MainWrapper>
      </Wrapper>
    );
  }
}

export default Reklam;
