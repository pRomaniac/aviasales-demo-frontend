import React from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';

import Data from '../Data';

const SelectData = Data.map(() => {

});

const IndicatorDest = styled.div`
  background: green;
`;

const DropdownIndicator = props => components.DropdownIndicator && (
<components.DropdownIndicator {...props}>
  <IndicatorDest>Индикатор</IndicatorDest>
</components.DropdownIndicator>
);

function Option(props) {
  console.log(props.data);

  return <components.Option {...props} />;
}

function CustomSelect() {
  Data.map(number => SelectData(number.city, number.city));

  return (
    <Select
      components={({ DropdownIndicator }, { Option })}
      defaultValue={Data[0]}
      options={Data}
    />
  );
}

export default CustomSelect;
