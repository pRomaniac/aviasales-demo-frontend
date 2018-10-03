import React from 'react';
import styled, { css } from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import CustomSelect from './Select';
import 'react-day-picker/lib/style.css';
import Data from '../Data';

export const SearchInput = styled(CustomSelect)``;

export const SearchButton = styled.button`
  box-sizing: border-box;
  display: block;
  background: #ff9241;

  border: 0;

  padding: 15px 74px 16px 45px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  ${props => props.size === 'mobile'
    && css`
      margin-top: 16px;
      padding: 14px 74px 13px 52px;
    `};
  ${props => props.size === 'tablet'
    && css`
      margin-top: 32px;
    `};
  ${props => props.size === 'desktop'
    && css`
      margin-top: 48px;
    `};
  ${props => !props.search
    && css`
      border-radius: 4px;
    `};
  ${props => props.size === 'desktop'
    && props.search
    && css`
      border-radius: 4px;
    `};
  ${props => props.size === 'tablet'
    && props.search
    && css`
      border-radius: 0 0 4px 0px;
    `};
`;

export const SearchFieldInputDivStart = styled.div`
  box-sizing: border-box;
  border: 0;
  padding: 1px;
  ${'' /*   height: 40px;
  background: #555000; */} ${props => props.size === 'mobile'
    && props.searchtype === 'Departure'
    && css`
      flex-basis: 100%;
    `};

  ${props => props.size === 'mobile'
    && props.searchtype === 'Destination'
    && css`
      flex-basis: 100%;
    `};

  ${props => props.size === 'mobile'
    && props.searchtype === 'DateFrom'
    && css`
      flex-basis: 50%;
    `};

  ${props => props.size === 'mobile'
    && props.searchtype === 'DateTo'
    && css`
      flex-basis: 50%;
    `};

  ${props => props.size === 'mobile'
    && props.searchtype === 'Quantity'
    && css`
      flex-basis: 100%;
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'Departure'
    && css`
      flex-basis: 41.66%;
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'Destination'
    && css`
      flex-basis: 41.66%;
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'DateFrom'
    && css`
      flex-basis: 20.83%;
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'DateTo'
    && css`
      flex-basis: 20.83%;
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'Quantity'
    && css`
      flex-basis: 41.66%;
    `};
  ${props => props.size === 'desktop'
    && props.searchtype === 'Departure'
    && css`
      flex-basis: 18.1%;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'Destination'
    && css`
      flex-basis: 18.1%;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'DateFrom'
    && css`
      flex-basis: 14.5%;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'DateTo'
    && css`
      flex-basis: 14.5%;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'Quantity'
    && css`
      flex-basis: 18.1%;
    `};
`;

export default SearchInput;

export const SearchDate = styled(DayPickerInput)`
  height: 100%;
`;

export function Inp(props) {
  const { searchtype, size } = props;
  if (!(searchtype === 'DateFrom' || searchtype === 'DateTo')) {
    return (
      <SearchFieldInputDivStart
        className={`${searchtype.toString()}_${size}`}
        size={size}
        searchtype={searchtype.toString()}
      >
        {/* ${if (number.toString()==='DateFrom' || number.toString()==='DateTo')} */}
        <SearchInput size={size} data={Data} />
      </SearchFieldInputDivStart>
    );
  }
  return (
    <SearchFieldInputDivStart
      className={`${searchtype.toString()}_${size}`}
      size={size}
      searchtype={searchtype.toString()}
    >
      {/* ${if (number.toString()==='DateFrom' || number.toString()==='DateTo')} */}
      <SearchDate size={size} placeholder={searchtype.toString()} />
    </SearchFieldInputDivStart>
  );
}

Inp.defaultProps = {
  searchtype: 'DateTo',
  size: 'mobile',
};
