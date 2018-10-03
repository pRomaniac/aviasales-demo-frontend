import React from 'react';
import styled from 'styled-components';

const SelectForm = styled.form``;
const SelectInput = styled.input``;

const OptionContainer = styled.div`
  position: fixed;
  z-index: 100;
`;

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

const LeftOptionWrapper = styled.div`
  display: block;
`;

const RightOptionWrapper = styled.div`
  display: block;
`;

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

function Options(props, data, dropDown) {
  if (dropDown) {
    return data.map(m => (
      <OptionContainer>
        <OptionWrapper key={m.id} number={m.id}>
          <RightOptionWrapper>
            <CityDiv>{`${m.city}, `}</CityDiv>
            <CountryDiv s>{m.Country}</CountryDiv>
          </RightOptionWrapper>
          <LeftOptionWrapper>
            <AerportKeyDiv>{m.AID}</AerportKeyDiv>
          </LeftOptionWrapper>
        </OptionWrapper>
      </OptionContainer>
    ));
  }
  return '';
}

/* function Select(props) {
  const { data } = props;
  const { size } = props;
  console.log(data);
  return (
    <SelectForm size={size} props={props}>
      <SelectInput size={size} props={props} />
      {Options(props, data)}
    </SelectForm>
  );
} */

class Select extends React.Component {
  state = {
    data: this.props.data || [],
    showItems: false,
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
  };

  render() {
    return (
      <SelectForm props={this.props}>
        <SelectInput props={this.props} onClick={this.dropDown} />
        {Options(this.state.props, this.state.data, this.state.showItems)}
      </SelectForm>
    );
  }
}

export default Select;
