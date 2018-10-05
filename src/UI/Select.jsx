import React from 'react';
import styled, { css } from 'styled-components';

const SelectForm = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const SelectInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  padding-left: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const OptionContainer = styled.div`
  position: absolute;
  display: block;
  width: ${props => props.width};
  z-index: 10;
  -webkit-transition: 1s ease-in-out;
  -moz-transition: 1s ease-in-out;
  -o-transition: 1s ease-in-out;
  transition: 0.5s ease-in-out;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  width: ${props => props.width};
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

function Option(props, item, width) {
  const m = item;
  return (
    <OptionWrapper key={m.id} number={m.id} width={width}>
      <RightOptionWrapper>
        <CityDiv>{`${m.city}, `}</CityDiv>
        <CountryDiv s>{m.Country}</CountryDiv>
      </RightOptionWrapper>
      <LeftOptionWrapper>
        <AerportKeyDiv>{m.AID}</AerportKeyDiv>
      </LeftOptionWrapper>
    </OptionWrapper>
  );
}

function Options(props, data, dropDown, width) {
  if (dropDown) {
    return (
      <OptionContainer className="OptionContainer" width={width}>
        {data.map(m => Option(props, m))}
      </OptionContainer>
    );
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
    mywidth: '',
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }));
    this.setState({
      mywidth: `${document.getElementsByClassName('SelectForm')[0].clientWidth}px`,
    });
  };

  dropDownFalse = () => {
    this.setState({ showItems: false });
  };

  dropDownTrue = () => {
    this.setState({ showItems: true });
    this.setState({
      mywidth: `${document.getElementsByClassName('SelectForm')[0].clientWidth}px`,
    });
  };

  WidthSearch() {
    console.log(`${document.getElementsByClassName('SelectForm')[0].clientWidth}px`);
    return this.setState({
      mywidth: `${document.getElementsByClassName('SelectForm')[0].clientWidth}px`,
    });
  }

  render() {
    console.log(this.state.mywidth);
    return (
      <SelectForm
        props={this.props}
        onClick={this.dropDown}
        className="SelectForm"
        width={this.state.mywidth}
      >
        <SelectInput
          className="SelectInput"
          props={this.props}
          onInput={this.dropDownTrue}
          width={this.state.mywidth}
        />
        {Options(this.state.props, this.state.data, this.state.showItems, this.state.mywidth)}
      </SelectForm>
    );
  }
}

export default Select;
