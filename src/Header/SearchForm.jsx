import React from 'react';
import styled, { css } from 'styled-components';
import { Inp, SearchButton } from '../UI';

const Butt = SearchButton;

const SearchWrapper = styled.div``;

const SearchFieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${props => props.size === 'mobile'
    && css`
      margin: 6px;
    `};
  ${props => props.size === 'tablet'
    && css`
      margin-top: 8px;
      margin-bottom: 8px;
    `};
  ${props => props.size === 'desktop'
    && !props.search
    && css`
      margin-top: 96px;
    `};
  ${props => props.size === 'desktop'
    && props.search
    && css`
      margin-bottom: 8px;
      margin-top: 8px;
      flex-wrap: nowrap;
    `};
`;

const SearchFields = ['Departure', 'Destination', 'DateFrom', 'DateTo', 'Quantity'];

function SearchFieldStart(props) {
  const { size } = props;
  return (
    <SearchWrapper>
      <SearchFieldRow size={size} className="SearchFieldRow">
        {SearchFields.map(number => (
          <Inp
            className={`${number.toString()}_${size}`}
            key={number.toString()}
            size={size}
            searchtype={number.toString()}
          />
        ))}
      </SearchFieldRow>
      <Butt />
    </SearchWrapper>
  );
}

export default SearchFieldStart;
