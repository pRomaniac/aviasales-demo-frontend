import React from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';

const LogoContainer = styled.div``;

const LogoIcon = styled.img`
  display: inline;
  vertical-align: middle;
`;

const LogoTxt = styled.p`
  display: inline;
  vertical-align: middle;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;

  color: #ffffff;

  margin-left: 8px;

  ${props => props.size === 'mobile'
    && css`
      display: none;
    `};
`;
function Logo(zprops) {
  return (
    <LogoContainer size={zprops.size}>
      <LogoIcon src={logo} size={zprops.size} />
      <LogoTxt size={zprops.size}>aviasales</LogoTxt>
    </LogoContainer>
  );
}

export default Logo;
