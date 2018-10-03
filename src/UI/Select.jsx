import React from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';

import Data from '../Data';

const IndicatorDest = styled.div`
  background: green;
`;

const DropdownIndicator = props => components.DropdownIndicator && (
<components.DropdownIndicator {...props}>
  <IndicatorDest>Индикатор</IndicatorDest>
</components.DropdownIndicator>
);

function CustomSelect() {
  const DataForSelect = new Array();
  console.log(DataForSelect);
  Data.map((m) => {
    console.log(m.city);
    console.log(m.id, m.city, m.Country, m.AID);
    DataForSelect.push({ value: m.id, label: m.city });
    return DataForSelect;
  });
  return <Select components={{ DropdownIndicator }} options={DataForSelect} />;
}

export default CustomSelect;
