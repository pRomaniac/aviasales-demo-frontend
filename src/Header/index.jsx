/* файл хедера */

import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import Title from './Title';
import SearchForm from './SearchForm';

const HeaderDiv = styled.div`
  background: linear-gradient(
    151.09deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );

  padding-top: 12px;
  padding-left: 98px;

  ${props => props.size === 'tablet'
    && css`
      padding-left: 8px;
    `};

  ${props => props.size === 'mobile'
    && css`
      padding-left: 6px;
    `};
`;

function Header(props) {
  const Headerprops = props;
  const { size } = Headerprops;
  return (
    <HeaderDiv size={size.size}>
      <Logo size={size.size} />
      <Title size={size.size} />
      <SearchForm size={size.size} />
    </HeaderDiv>
  );
}

export default Header;
