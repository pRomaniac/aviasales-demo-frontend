import React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export const SearchInput = styled(Select)`
  box-sizing: border-box;
  border: 0px;
  padding: 0px;
  width: 100%;

  ${props => props.size === 'desktop'
    && css`
      ${''};
    `};

  ${props => props.size === 'tablet'
    && css`
      ${''};
    `};

  ${props => props.size === 'mobile'
    && css`
      ${''};
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'Departure'
    //! props.search &&
    && css`
      border-radius: 4px 0px 0 0;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0px 4px 0 0;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0px 0px 0px 4px;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'DateTo'
    && css`
      border-radius: 0 0 0px 0px;
    `};

  ${props => props.size === 'tablet'
    && !props.search
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 0 4px 0px;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Departure'
    && css`
      border-radius: 4px 4px 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'DateTo'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 0 4px 4px;
    `};
  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Departure'
    && css`
      border-radius: 4px 0px 0px 4px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'DateTo'
    //! props.search &&
    && css`
      border-radius: 0 0 0px 0px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 4px 4px 0px;
    `};
`;

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
  box-sizing: border-box;
  border: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  ${props => props.size === 'desktop'
    && css`
      ${''};
    `};

  ${props => props.size === 'tablet'
    && css`
      ${''};
    `};

  ${props => props.size === 'mobile'
    && css`
      ${''};
    `};

  ${props => props.size === 'tablet'
    && props.searchtype === 'Departure'
    //! props.search &&
    && css`
      border-radius: 4px 0px 0 0;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0px 4px 0 0;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0px 0px 0px 4px;
    `};

  ${props => props.size === 'tablet'
    //! props.search &&
    && props.searchtype === 'DateTo'
    && css`
      border-radius: 0 0 0px 0px;
    `};

  ${props => props.size === 'tablet'
    && !props.search
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 0 4px 0px;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Departure'
    && css`
      border-radius: 4px 4px 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'DateTo'
    && css`
      border-radius: 0 0 0 0;
    `};

  ${props => props.size === 'mobile'
    && !props.search
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 0 4px 4px;
    `};
  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Departure'
    && css`
      border-radius: 4px 0px 0px 4px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Destination'
    && css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'DateFrom'
    && css`
      border-radius: 0px 0px 0px 0px;
    `};

  ${props => props.size === 'desktop'
    && props.searchtype === 'DateTo'
    //! props.search &&
    && css`
      border-radius: 0 0 0px 0px;
    `};

  ${props => props.size === 'desktop'
    //! props.search &&
    && props.searchtype === 'Quantity'
    && css`
      border-radius: 0 4px 4px 0px;
    `};
`;

export function Inp(props) {
  const { searchtype, size } = props;
  console.log('searchtype', searchtype);
  if (!(searchtype === 'DateFrom' || searchtype === 'DateTo')) {
    return (
      <SearchFieldInputDivStart
        className={`${searchtype.toString()}_${size}`}
        size={size}
        searchtype={searchtype.toString()}
      >
        {/* ${if (number.toString()==='DateFrom' || number.toString()==='DateTo')} */}
        <SearchInput size={size} placeholder={searchtype.toString()} />
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
