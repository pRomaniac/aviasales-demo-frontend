import React from "react";
import styled, { css } from "styled-components";
import arrows from "../img/arrow.svg";
import calendar_icon from "../img/calendar.svg";
import dropdownarrow from "../img/Shape.svg";

const SearchFieldDecor = styled.div`
  display: flex;
  /* width: 100%; */
  margin-top: -38px;
  z-index: 2;
  margin-bottom: 19px;

  justify-content: space-between;
`;

const SearchFieldInputDivDecorText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  margin-left: 16px;
  /* text-align: center; */
  color: #a0b0b9;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 90px;
  ${props =>
    props.choosen === "yes" &&
    css`
      color: #4a4a4a;
    `};
`;

const SearchFieldInputDivDecor = styled.div`
  margin-right: 16px;
`;

const SearchFieldInputAirport = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  display: inline;
  color: #a0b0b9;
`;

const SearchFieldInputImg = styled.img`
  vertical-align: middle;
  margin-left: 11px;
`;

const SearchFiledDecorClass = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  display: inline;
  color: #a0b0b9;
`;

const DepartureCity = "Москва";

function SearchFieldInputDivDecorImg(props) {
  if (props.props.typ === "Departure") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.size}
        src={arrows}
      />
    );
  } else if (props.props.typ === "Destination") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.size}
        src={arrows}
      />
    );
  } else if (props.props.typ === "DateFrom") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.size}
        src={calendar_icon}
      />
    );
  } else if (props.props.typ === "DateTo") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.size}
        src={calendar_icon}
      />
    );
  } else if (props.props.typ === "Quantity") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.size}
        src={dropdownarrow}
      />
    );
  } else return "";
}

function SearchFieldDecorText(props) {
  if (props.props.typ === "Departure") {
    return (
      <SearchFieldInputDivDecorText
        className={props.props.typ + " " + props.size}
        choosen="yes"
      >
        {DepartureCity}
      </SearchFieldInputDivDecorText>
    );
  } else if (props.props.typ === "Destination") {
    return (
      <SearchFieldInputDivDecorText
        className={props.props.typ + " " + props.size}
      >
        Город прибытия
      </SearchFieldInputDivDecorText>
    );
  } else if (props.props.typ === "DateFrom") {
    return (
      <SearchFieldInputDivDecorText
        className={props.props.typ + " " + props.size}
      >
        Туда
      </SearchFieldInputDivDecorText>
    );
  } else if (props.props.typ === "DateTo") {
    return (
      <SearchFieldInputDivDecorText
        className={props.props.typ + " " + props.size}
      >
        Обратно
      </SearchFieldInputDivDecorText>
    );
  } else if (props.props.typ === "Quantity") {
    return (
      <SearchFieldInputDivDecorText
        className={props.props.typ + " " + props.size}
        choosen="yes"
      >
        1 пассажир
        <SearchFiledDecorClass>, эконом </SearchFiledDecorClass>
      </SearchFieldInputDivDecorText>
    );
  } else return "";
}

function SearchFieldInputDivDecorAirport(props) {
  if (props.props.typ === "Departure") {
    return (
      <SearchFieldInputAirport className={props.props.typ + " " + props.size}>
        MOW
      </SearchFieldInputAirport>
    );
  } else if (props.props.typ === "Destination" && props.choosen === "yes") {
    return (
      <SearchFieldInputAirport className={props.props.typ + " " + props.size}>
        MOW
      </SearchFieldInputAirport>
    );
  } else return "";
}

function SearchFieldDecorations(props) {
  return (
    <SearchFieldDecor className={props.typ + " " + props.size}>
      <SearchFieldDecorText props={props} />
      <SearchFieldInputDivDecor
        props={props}
        className={props.typ + " " + props.size}
      >
        <SearchFieldInputDivDecorAirport props={props} />
        <SearchFieldInputDivDecorImg props={props} />
      </SearchFieldInputDivDecor>
    </SearchFieldDecor>
  );
}

export default SearchFieldDecorations;
