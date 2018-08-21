import React from "react";
import styled, { css } from "styled-components";

import Phone from "../img/phone.png";
import Laptop_Phone from "../img/laptop_phone.png";

import Ios from "../img/ios.png";
import Android_ikon from "../img/andriod.png";
import Wp from "../img/windowsphone.png";

import star from "../img/star.svg";
import nofullstar from "../img/notfullstar.svg";

const Wrap = styled.div`
  ${props =>
    !(props.size === "mobile") &&
    css`
      display: flex;
      justify-content: space-around;
    `};
`;

const LimitDiv = styled.div`
  ${props =>
    !(props.size === "mobile") &&
    css`
      border-right: 1px white solid;
    `};
`;

const Wrapper = styled.div`
  background: linear-gradient(132.6deg, #00b0de 0%, #196ebd 100%);
  display: flex;
  justify-content: center;
  ${props =>
    props.size === "mobile" &&
    css`
      padding-left: 6px;
      padding-right: 6px;
      ${"" /*      padding-bottom: 24px; */} padding-top: 20px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      padding-left: 72px;
      padding-right: 72px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      padding-left: 204px;
      padding-right: 204px;
    `};
`;
const Row = styled.div``;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;

  color: #ffffff;

  ${props =>
    props.size === "tablet" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 40px;
      font-size: 32px;

      color: #ffffff;

      margin-top: 46px;
    `};

  ${props =>
    props.size === "desktop" &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      line-height: 40px;
      font-size: 32px;

      color: #ffffff;

      margin-top: 66px;
    `};
`;

const RatingStars = styled.img`
  display: inline;
`;
const RatingText = styled.p`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;

  color: #ffffff;

  margin-left: 8px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #ffffff;

  ${props =>
    props.size === "desktop" &&
    css`
      display: block;
      margin-top: 19px;
      margin-bottom: 43px;
    `};
`;

const ReklamBlock = styled.div`
  display: flex;
  ${props =>
    props.size === "tablet" &&
    css`
      justify-content: space-around;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      justify-content: space-between;
    `};
`;

const PhoneImgWrap = styled.div`
  ${props =>
    props.size === "tablet" &&
    css`
      margin-top: -31px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-top: -27px;
    `};
`;

const PhoneImg = styled.img`
  src=src: url(${props => props.src});
`;

const OsPhonesWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${props =>
    !(props.size === "mobile") &&
    css`
      flex-direction: row;
      margin-top: 40px;
    `};
`;
const OsPhoneWrap = styled.div`
  display: inline;
  ${props =>
    props.size === "tablet" &&
    css`
      display: flex;
      justify-content: space-around;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      display: flex;
      justify-content: space-between;
    `};
`;
const OsPhoneImg = styled.img`
  display: inline;
  src=src: url(${props => props.src});
`;

const OsPhoneText = styled.div`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;

  color: #ffffff;

  margin-left: 8px;

  ${props =>
    !(props.size === "mobile") &&
    css`
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      line-height: 24px;
      font-size: 14px;

      color: #ffffff;
    `};
`;

function Reklama(props) {
  if (props.size === "mobile") {
    return (
      <Wrapper size={props.size} className={"Reklama" + "Wrapper" + props.size}>
        <Row size={props.size} className={"Reklama" + "Row" + props.size}>
          <Title size={props.size} className={"Reklama" + "Title" + props.size}>
            Скачай мобильное приложение Aviasales.ru
          </Title>
          <Rating
            size={props.size}
            className={"Reklama" + "Rating" + props.size}
          >
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={nofullstar}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingText
              size={props.size}
              className={"Reklama" + "RatingText" + props.size}
            >
              Более 103 000 оценок
            </RatingText>
          </Rating>
          <ReklamBlock
            size={props.size}
            className={"Reklama" + "ReklamBlock" + props.size}
          >
            <PhoneImgWrap
              size={props.size}
              className={"Reklama" + "PhoneImgWrap" + props.size}
            >
              <PhoneImg
                size={props.size}
                src={Phone}
                className={"Reklama" + "PhoneImg" + props.size}
              />
            </PhoneImgWrap>
            <OsPhonesWrap
              size={props.size}
              className={"Reklama" + "OsPhonesWrap" + props.size}
            >
              <OsPhoneWrap
                size={props.size}
                className={"Reklama" + "OsPhoneWrap" + props.size}
              >
                <OsPhoneImg
                  src={Ios}
                  size={props.size}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
                <OsPhoneText
                  size={props.size}
                  className={"Reklama" + "OsPhoneText" + props.size}
                >
                  iPhone или iPad
                </OsPhoneText>
              </OsPhoneWrap>
              <OsPhoneWrap
                size={props.size}
                className={"Reklama" + "OsPhoneWrap" + props.size}
              >
                <OsPhoneImg
                  src={Android_ikon}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
                <OsPhoneText className={"Reklama" + "OsPhoneText" + props.size}>
                  Android
                </OsPhoneText>
              </OsPhoneWrap>
              <OsPhoneWrap
                size={props.size}
                className={"Reklama" + "OsPhoneWrap" + props.size}
              >
                <OsPhoneImg
                  src={Wp}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
                <OsPhoneText className={"Reklama" + "Wrapper" + props.size}>
                  Windows Phone
                </OsPhoneText>
              </OsPhoneWrap>
            </OsPhonesWrap>
          </ReklamBlock>
        </Row>
      </Wrapper>
    );
  } else if (props.size === "tablet") {
    return (
      <Wrapper size={props.size} className={"Reklama" + "Wrapper" + props.size}>
        <PhoneImgWrap
          size={props.size}
          className={"Reklama" + "PhoneImgWrap" + props.size}
        >
          <PhoneImg
            size={props.size}
            src={Laptop_Phone}
            className={"Reklama" + "PhoneImg" + props.size}
          />
        </PhoneImgWrap>
        <Row size={props.size} className={"Reklama" + "Row" + props.size}>
          <Title size={props.size} className={"Reklama" + "Title" + props.size}>
            Скачай мобильное приложение Aviasales.ru
          </Title>
          <Rating
            size={props.size}
            className={"Reklama" + "Rating" + props.size}
          >
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={nofullstar}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingText
              size={props.size}
              className={"Reklama" + "RatingText" + props.size}
            >
              Более 103 000 оценок
            </RatingText>
          </Rating>
          <ReklamBlock
            size={props.size}
            className={"Reklama" + "ReklamBlock" + props.size}
          >
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Ios}
                  size={props.size}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText
                  size={props.size}
                  className={"Reklama" + "OsPhoneText" + props.size}
                >
                  iPhone или iPad
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
            <LimitDiv
              size={props.size}
              className={"Reklama" + "LimitDiv" + props.size}
            />
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Android_ikon}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText className={"Reklama" + "OsPhoneText" + props.size}>
                  Android
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
            <LimitDiv
              size={props.size}
              className={"Reklama" + "LimitDiv" + props.size}
            />
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Wp}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText className={"Reklama" + "OsPhoneText" + props.size}>
                  Windows Phone
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
          </ReklamBlock>
        </Row>
      </Wrapper>
    );
  } else if (props.size === "desktop") {
    return (
      <Wrapper size={props.size} className={"Reklama" + "Wrapper" + props.size}>
        <PhoneImgWrap
          size={props.size}
          className={"Reklama" + "PhoneImgWrap" + props.size}
        >
          <PhoneImg
            size={props.size}
            src={Laptop_Phone}
            className={"Reklama" + "PhoneImg" + props.size}
          />
        </PhoneImgWrap>
        <Row size={props.size} className={"Reklama" + "Row" + props.size}>
          <Title size={props.size} className={"Reklama" + "Title" + props.size}>
            Скачай мобильное приложение Aviasales.ru
          </Title>
          <Rating
            size={props.size}
            className={"Reklama" + "Rating" + props.size}
          >
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={star}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingStars
              src={nofullstar}
              size={props.size}
              className={"Reklama" + "RatingStars" + props.size}
            />
            <RatingText
              size={props.size}
              className={"Reklama" + "RatingText" + props.size}
            >
              Более 103 000 оценок
            </RatingText>
          </Rating>
          <ReklamBlock
            size={props.size}
            className={"Reklama" + "Wrapper" + props.size}
          >
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Ios}
                  size={props.size}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText
                  size={props.size}
                  className={"Reklama" + "OsPhoneText" + props.size}
                >
                  iPhone или iPad
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
            <LimitDiv
              size={props.size}
              className={"Reklama" + "LimitDiv" + props.size}
            />
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Android_ikon}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText className={"Reklama" + "OsPhoneText" + props.size}>
                  Android
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
            <LimitDiv
              size={props.size}
              className={"Reklama" + "LimitDiv" + props.size}
            />
            <OsPhoneWrap
              size={props.size}
              className={"Reklama" + "OsPhoneWrap" + props.size}
            >
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneImg
                  src={Wp}
                  className={"Reklama" + "OsPhoneImg" + props.size}
                />
              </Wrap>
              <Wrap
                size={props.size}
                className={"Reklama" + "Wrap" + props.size}
              >
                <OsPhoneText className={"Reklama" + "OsPhoneText" + props.size}>
                  Windows Phone
                </OsPhoneText>
              </Wrap>
            </OsPhoneWrap>
          </ReklamBlock>
        </Row>
      </Wrapper>
    );
  } else return "";
}

export default Reklama;
