import React from 'react';
import styled, { css } from 'styled-components';

const TitleContainer = styled.div`
  margin-top: 213px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.size === 'tablet'
    && css`
      margin-top: 81px;
    `};
  ${props => props.size === 'mobile'
    && css`
      margin-top: 47px;
    `};
`;

const TitleH1 = styled.h1`
  margin: 0; /*сбросил отступы у заголовка, normilize бешеные отступы дает,  мне не нравится.*/
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;
  color: #ffffff;
  ${props => props.size === 'tablet'
    && css`
      font-size: 32px;
    `};
  ${props => props.size === 'mobile'
    && css`
      font-size: 20px;
      line-height: normal;
    `};
`;

const TitleH2 = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  ${props => props.size === 'tablet'
    && css`
      font-size: 20px;
    `};
  ${props => props.size === 'mobile'
    && css`
      display: none;
    `};
`;

function Title(props) {
  const propssize = props;
  const { size } = propssize;
  return (
    <TitleContainer size={size}>
      <TitleH1 size={size}>Поиск дешевых авиабилетов</TitleH1>
      <TitleH2 size={size}>Лучший способ купить авиабилеты дешево</TitleH2>
    </TitleContainer>
  );
}

export default Title;
