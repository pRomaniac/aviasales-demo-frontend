import React from "react";
import styled, { css } from "styled-components";

import plane from "../img/small_plane.png";
import email from "../img/small_email.png";
import list from "../img/small_list.png";
/*TODO: стейты можно делать внутри любого js с..ка !!! Надо теперь всю лапшу обновить!!*/
/* class Blog extends React.Component {
  state = {
    Onclick: [true, false]
  };

  render() {
    return (
      <div>
        To get started, edit <code>src/App.js</code> and save to reload.
      </div>
    );
  }
}

export default Blog; */

const Content = [
  {
    id: 1,
    mark: "HowToBue",
    Title: "КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?",
    Text:
      "Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год.",
    icon: { plane }
  },
  {
    id: 2,
    mark: "ElectronicTickets",
    Title: "ЭЛЕКТРОННЫЙ АВИАБИЛЕТ",
    Text:
      "Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете. Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога.",
    icon: { email }
  },
  {
    id: 3,
    mark: "Advices",
    Title: "20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ",
    Text:
      "Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!",
    icon: { list }
  }
];

const Wrapper = styled.div`
  ${props =>
    props.size === "mobile" &&
    css`
      margin-left: 6px;
      margin-right: 6px;
      padding-bottom: 24px;
      padding-top: 20px;
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

const ArticleWrapper = styled.div`
  margin-top: 4px;
`;
const ArticleTitle = styled.h3`
  display: inline;
  margin-left: 10px;
`;
const ArticleImg = styled.img`
  display: inline;
  src: url(${props => props.src});
`;

const ArticleWholeTile = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ArticleText = styled.p`
  display: inline;
  text-align: justify;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;

  color: #4a4a4a;
`;

const ArticleLink = styled.a`
  display: inline;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #00ace2;
`;

const ArticleWholeText = styled.div``;

function Articles(props, Article) {
  return (
    <ArticleWrapper
      size={props.size}
      key={Article.mark}
      className="ArticleWrapper"
    >
      <ArticleWholeTile size={props.size} className="ArticleWholeTile">
        <ArticleImg
          src={Article.icon[Object.keys(Article.icon).toString()]}
          className="ArticleImg"
        />
        <ArticleTitle size={props.size} className="ArticleTitle">
          {Article.Title}
        </ArticleTitle>
      </ArticleWholeTile>
      <ArticleWholeText size={props.size} className="ArticleWholeText">
        <ArticleText size={props.size} className="ArticleText">
          {Article.Text}
        </ArticleText>
        <ArticleLink
          size={props.size}
          href={Article.mark}
          className="ArticleLink"
        >
          Подробнее
        </ArticleLink>
      </ArticleWholeText>
    </ArticleWrapper>
  );
}
function Blogs(props) {
  return (
    <Wrapper size={props.size} className="BlogsWrapper">
      {Content.map(Article => Articles(props, Article))}
    </Wrapper>
  );
}

export default Blogs;
