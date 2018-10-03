import React from 'react';
import styled from 'styled-components';

const SelectForm = styled.form``;
const SelectInput = styled.input``;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;

  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:nth-child(even) {
    background-color: #f4f4f4;
  }
  &:hover {
    box-shadow: inset 10px 10px 10px -10px rgb(2, 171, 219),
      inset -10px -10px 10px -10px rgb(2, 171, 219);
  }
`;

const LeftOptionWrapper = styled.div``;

const RightOptionWrapper = styled.div``;

const CityDiv = styled.div`
  display: inline;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 14px;

  color: #4a4a4a;
`;

const CountryDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;

  color: #a0b0b9;

  display: inline;
`;

const AerportKeyDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
  display: inline;
`;

function Options(props, data) {
  const { size } = props;

  return data.map(m => (
    <OptionWrapper size={size} key={m.id} number={m.id}>
      <RightOptionWrapper size={size}>
        <CityDiv size={size}>{`${m.city}, `}</CityDiv>

        <CountryDiv size={size}>{m.Country}</CountryDiv>
      </RightOptionWrapper>
      <LeftOptionWrapper size={size}>
        <AerportKeyDiv size={size}>{m.AID}</AerportKeyDiv>
      </LeftOptionWrapper>
    </OptionWrapper>
  ));
}

function Select(props) {
  const { data } = props;
  const { size } = props;
  console.log(data);
  return (
    <SelectForm size={size} props={props}>
      <SelectInput size={size} props={props} />
      {Options(props, data)}
    </SelectForm>
  );
}

export default Select;
