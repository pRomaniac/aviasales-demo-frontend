/* файл хедера */

import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Logo = styled.img`
  background: red;
`;

function LogoDiv() {
  return <Logo src={logo} />;
}

export default LogoDiv;
