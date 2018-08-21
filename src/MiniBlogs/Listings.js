import React from "react";
import styled, { css } from "styled-components";

const Content = [
  {
    Страны: ["Россия", "Тайланд", "Черногория", "Кипр", "Болгария", "Грузия"]
  },
  {
    Города: [
      "Москва",
      "Санкт-Петербург",
      "Симферополь",
      "Адлер",
      "Екатеринбург",
      "Лондон"
    ]
  },
  {
    Авиакомпании: [
      "Air Berlin",
      "Air France",
      "Alitlia",
      "Air Baltic",
      "Emirates",
      "KLM"
    ]
  },
  {
    Аэропорты: [
      "Шереметьево",
      "Курумоч",
      "Домодедово",
      "Толмачево",
      "Владивосток",
      "Гамбург"
    ]
  },
  {
    Направления: [
      "MOW - SIP",
      "MOW - AER",
      "MOW - TIV",
      "MOW - MRV",
      "LED - MOW",
      "MOW - BKK"
    ]
  },
  {
    Сервисы: [
      "Горящие авиабилеты",
      "Календарь низких цен",
      "Карта низких цен",
      "Спецпредложения",
      "Таблица цен",
      "Блог",
      "Помощь"
    ]
  }
];

const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
      ${"" /*       padding-bottom: 24px;
      padding-top: 20px; */};
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      margin-left: 72px;
      margin-right: 72px;
      margin-bottom: 48px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      margin-left: 204px;
      margin-right: 204px;
      margin-bottom: 48px;
    `};
`;

const ContentDiv = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  ${props =>
    props.size === "mobile" &&
    css`
      width: 146px;
    `};
  ${props =>
    props.size === "tablet" &&
    css`
      width: 176px;
    `};
  ${props =>
    props.size === "desktop" &&
    css`
      width: 146px;
    `};
`;

const ContentTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
  margin-top: 32px;
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const ContentText = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
`;

const ContentLink = styled.div``;

const Link = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  text-decoration: none;
  color: #4a4a4a;
`;

function ContentRender(props, text) {
  return (
    <ContentDiv
      size={props.size}
      key={Object.keys(text).toString()}
      className="ContentRender"
    >
      {TitleRender(props, Object.keys(text).toString())}
      <ContentText size={props.size} className="ContentText">
        {text[Object.keys(text)].map(obj => TextRender(props, obj))}
      </ContentText>
      {LinkRender(props, Object.keys(text).toString())}
    </ContentDiv>
  );
}

function LinkRender(props, text) {
  if (text === "Направления" || text === "Сервисы") {
    return "";
  } else
    return (
      <ContentLink size={props.size} className="LinkRenderContentLink">
        <Link size={props.size} href={text} className="LinkRenderLink">
          Все {text} →
        </Link>
      </ContentLink>
    );
}

function TextRender(props, text) {
  return (
    <Text size={props.size} key={text.toString()} className="TextRender">
      {text.toString()}
    </Text>
  );
}

function TitleRender(props, text) {
  return (
    <ContentTitle size={props.size} className="TitleRenderContentTitle">
      <Title size={props.size} className="TitleRenderTitle">
        {text.toString()}
      </Title>
    </ContentTitle>
  );
}

function mmap(props) {
  return (
    <WrapperDiv size={props.size} className="mmapWrapperDiv">
      {Content.map(cont => ContentRender(props, cont))}
    </WrapperDiv>
  );
}

export default mmap;
