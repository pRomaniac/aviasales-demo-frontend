import React from "react";
import styled, { css } from "styled-components";

import vk from "../img/VK.svg";
import fb from "../img/fb.svg";
import tw from "../img/Twitter_Icon.svg";
import In from "../img/Insta.svg";
import vb from "../img/viber.svg";

import AppStore from "../img/AppStore.png";
import GooglePlay from "../img/GooglePlay.png";
import WindowMarket from "../img/WindowMarket.png";
import UpButton from "../img/StickyUp.svg";

const Links = [
  { name: "О компании", url: "About" },
  { name: "Партнерская программа", url: "PartnerProgram" },
  { name: "Реклама", url: "Reklama" },
  { name: "Вакансии", url: "Jobs" },
  { name: "Помощь", url: "Help" },
  { name: "Правила", url: "Rules" },
  { name: "White Label авиабилеты", url: "WhiteLabel" }
];

const Social = [
  { name: "Вконтакте", icon: { vk }, url: "" },
  { name: "Фейсбук", icon: { fb }, url: "" },
  { name: "Инстаграм", icon: { In }, url: "" },
  { name: "Твиттер", icon: { tw }, url: "" },
  { name: "Вайбер", icon: { vb }, url: "" }
];

const Wrapper = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 72px;
      margin-right: 72px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      display: flex;
      margin-left: 99px;
      margin-right: 99px;
    `};
`;

const LinksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LinkA = styled.a`
  margin-right: 2px;
  margin-left: 2px;
  margin-top: 4px;
  margin-bottom: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-decoration: none;
  color: #5b5b5c;
`;
const SocialsDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  margin-bottom: 4px;
  ${props =>
    props.size === "mobile" &&
    css`
      justify-content: start;
    `};
`;
const SocialDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
  ${props =>
    props.size === "mobile" &&
    css`
      flex-basis: 33%;
    `};
`;
const SocialIcon = styled.img`
  src=src: url(${props => props.src});
  margin-right: 2px;
  margin-left: 2px;
`;
const AddServiceDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  margin-bottom: 12px;
  margin-top: 20px;
  color: #5b5b5c;
  ${props =>
    props.size === "mobile" &&
    css`
      text-align: center;
    `};
`;

const Stores = styled.div`
  display: block;
`;
const StoresImg = styled.img`
  src=src: url(${props => props.src});
  display: inline;
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  ${props =>
    props.size === "mobile" &&
    css`
      display: block;
      margin-right: auto;
      margin-left: auto;
    `};
`;
const FooterLink = styled.div`
  padding-right: auto;
  padding-left: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  ${props =>
    props.size === "mobile" &&
    css`
      text-align: center;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      float: right;
    `};
`;
const FooterLinkA = styled.a`
  margin-right: auto;
  margin-left: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
  ${props =>
    props.size === "mobile" &&
    css`
      text-align: center;
    `};
`;

const LeftDiv = styled.div`
  margin-left: 0px;
  margin-right: auto;
`;
const RightDiv = styled.div`
  margin-left: auto;
  margin-right: 0px;
`;

const StickyUpDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.5);
  border-radius: 100px;
  position: fixed;
  right: 98px;
  bottom: 29px;
  display: block;

  box-sizing: border-box;

  width: 48px;

  height: 48px;
`;

const StickyUpImg = styled.img`
  margin: 14px;
`;

function Link(props, links) {
  return (
    <LinkA
      size={props.size}
      href={links.url}
      key={links.name}
      className={"LinkA"}
    >
      {links.name}
    </LinkA>
  );
}

function SocialRender(props, socials) {
  return (
    <SocialDiv
      size={props.size}
      href={socials.url}
      key={socials.name}
      className="SocialDiv"
    >
      <SocialIcon
        src={socials.icon[Object.keys(socials.icon).toString()]}
        size={props.size}
        className="SocialIcon"
      />
      {socials.name}
    </SocialDiv>
  );
}

function Footer(props) {
  if (props.size === "desktop") {
    return (
      <Wrapper size={props.size} className="FooterWrapper">
        <LeftDiv className="FooterLeftDiv">
          <LinksDiv size={props.size} className="FooterLinksDiv">
            >{Links.map(link => Link(props, link))}
          </LinksDiv>
          <SocialsDiv size={props.size} className="FooterSocialsDiv">
            {Social.map(social => SocialRender(props, social))}
          </SocialsDiv>
          <AddServiceDiv size={props.size} className="FooterAddServiceDiv">
            Поиск и бронирование отелей
          </AddServiceDiv>
        </LeftDiv>
        <RightDiv className={"FooterRightDiv"}>
          <Stores size={props.size} className={"FooterStores"}>
            <StoresImg
              size={props.size}
              src={AppStore}
              className={"FooterStoresImgAppStore"}
            />

            <StoresImg
              size={props.size}
              src={GooglePlay}
              className={"FooterStoresImgGooglePlay"}
            />

            <StoresImg
              size={props.size}
              src={WindowMarket}
              className={"FooterStoresImgWindowMarket"}
            />
          </Stores>
          <FooterLink size={props.size} className="FooterLink">
            <FooterLinkA size={props.size} href="" className="FooterLinkA">
              © 2007–2018, Aviasales — дешевые авиабилеты
            </FooterLinkA>
          </FooterLink>
        </RightDiv>
        <StickyUpDiv size={props.size} className="StickyUpDiv">
          <StickyUpImg src={UpButton} className="StickyUpImg" />
        </StickyUpDiv>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper size={props.size} className={"FooterWrapper"}>
        <LinksDiv size={props.size} className={"FooterLinksDiv"}>
          {Links.map(link => Link(props, link))}
        </LinksDiv>
        <SocialsDiv size={props.size} className={"FooterSocialsDiv"}>
          {Social.map(social => SocialRender(props, social))}
        </SocialsDiv>
        <AddServiceDiv size={props.size} className={"FooterAddServiceDiv"}>
          Поиск и бронирование отелей
        </AddServiceDiv>
        <Stores size={props.size} className={"FooterStores"}>
          <StoresImg
            size={props.size}
            src={AppStore}
            className={"FooterStoresImgAppStore"}
          />
          <StoresImg
            size={props.size}
            src={GooglePlay}
            className={"FooterStoresImgGooglePlay"}
          />
          <StoresImg
            size={props.size}
            src={WindowMarket}
            className={"FooterStoresImgWindowMarket"}
          />
        </Stores>
        <FooterLink size={props.size} className={"FooterFooterLink"}>
          <FooterLinkA
            size={props.size}
            href=""
            className={"FooterFooterLinkA"}
          >
            © 2007–2018, Aviasales — дешевые авиабилеты
          </FooterLinkA>
        </FooterLink>
      </Wrapper>
    );
  }
}

export default Footer;
