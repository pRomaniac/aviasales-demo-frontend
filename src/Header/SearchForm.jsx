import React from 'react';
import styled, { css } from 'styled-components';
import * as UI from '../UI';

const Inp = UI.SearchInput;
const Butt = UI.SearchButton;
const SearchDiv = UI.SearchFieldInputDivStart;

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
{/*           <SearchDiv
            className={`${number.toString()}_${size}`}
            key={number.toString()}
            size={size}
            searchtype={number.toString()}
          >
            {/* ${if (number.toString()==='DateFrom' || number.toString()==='DateTo')} */}
            <Inp size={size} placeholder={number.toString()} />
          </SearchDiv> */}

          
        ))}
      </SearchFieldRow>
      <Butt />
    </SearchWrapper>
  );
}

export default SearchFieldStart;
