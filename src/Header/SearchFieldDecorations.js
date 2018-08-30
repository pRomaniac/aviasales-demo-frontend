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
  overflow: hidden;
  justify-content: space-between;
`;

const SearchFieldInputDivDecorText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  margin-left: 16px;
  overflow: hidden;
  /* text-align: center; */
  color: #a0b0b9;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${props =>
    props.choosen === "yes" &&
    css`
      color: #4a4a4a;
    `};
  width: ${props => props.width};
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
        className={props.props.typ + " " + props.props.size}
        src={arrows}
      />
    );
  } else if (props.props.typ === "Destination") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.props.size}
        src={arrows}
      />
    );
  } else if (props.props.typ === "DateFrom") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.props.size}
        src={calendar_icon}
      />
    );
  } else if (props.props.typ === "DateTo") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.props.size}
        src={calendar_icon}
      />
    );
  } else if (props.props.typ === "Quantity") {
    return (
      <SearchFieldInputImg
        className={props.props.typ + " " + props.props.size}
        src={dropdownarrow}
      />
    );
  } else return "";
}

class SearchFieldDecorText extends React.Component {
  state = {
    mywidth: ""
  };

  width_search(props) {
    var per = 0;

    if (props.props.props.size === "desktop") {
      per = 16 / 100;
    }
    if (props.props.props.size === "tablet") {
      per = 24 / 100;
    }
    console.log(props.props.props.size);
    console.log(
      document.getElementsByClassName("SearchFieldRow")[0].clientWidth * per -
        53
    );
    try {
      return this.setState({
        mywidth:
          document.getElementsByClassName("SearchFieldRow")[0].clientWidth *
            per -
          53 +
          "px"
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    /*     console.log(this.state.sizing); */
    //console.log(document.body.clientWidth);
    this.width_search(this);
  }

  componentWillUnmount() {
    this.width_search(this);
  }

  SearchFieldDecorTextFunc(props) {
    props = this.props;
    if (props.props.typ === "Departure") {
      return (
        <SearchFieldInputDivDecorText
          className={props.props.typ + " " + props.props.size}
          choosen="yes"
          width={this.props.width}
        >
          {DepartureCity}
        </SearchFieldInputDivDecorText>
      );
    } else if (props.props.typ === "Destination") {
      return (
        <SearchFieldInputDivDecorText
          className={props.props.typ + " " + props.props.size}
          width={this.props.width}
        >
          Город прибытия
        </SearchFieldInputDivDecorText>
      );
    } else if (props.props.typ === "DateFrom") {
      return (
        <SearchFieldInputDivDecorText
          className={props.props.typ + " " + props.props.size}
          width={this.props.width}
        >
          Туда
        </SearchFieldInputDivDecorText>
      );
    } else if (props.props.typ === "DateTo") {
      return (
        <SearchFieldInputDivDecorText
          className={props.props.typ + " " + props.props.size}
          width={this.props.width}
        >
          Обратно
        </SearchFieldInputDivDecorText>
      );
    } else if (props.props.typ === "Quantity") {
      console.log(props.props.size);
      return (
        <SearchFieldInputDivDecorText
          className={props.props.typ + " " + props.props.size}
          width={this.state.mywidth}
          choosen="yes"
        >
          1 пассажир
          <SearchFiledDecorClass>, эконом </SearchFiledDecorClass>
        </SearchFieldInputDivDecorText>
      );
    } else return "";
  }
  render(props) {
    return this.SearchFieldDecorTextFunc(props);
  }
}

function SearchFieldInputDivDecorAirport(props) {
  if (props.props.typ === "Departure") {
    return (
      <SearchFieldInputAirport
        className={props.props.typ + " " + props.props.size}
      >
        MOW
      </SearchFieldInputAirport>
    );
  } else if (props.props.typ === "Destination" && props.choosen === "yes") {
    return (
      <SearchFieldInputAirport
        className={props.props.typ + " " + props.props.size}
      >
        MOW
      </SearchFieldInputAirport>
    );
  } else return "";
}

function SearchFieldDecorations(props) {
  console.log();
  return (
    <SearchFieldDecor
      className={"SearchFieldDecor_" + props.typ + " " + props.size}
    >
      <SearchFieldDecorText
        props={props}
        className={"SearchFieldDecorText" + props.typ + " " + props.size}
      />
      <SearchFieldInputDivDecor
        props={props}
        className={"SearchFieldInputDivDecor" + props.typ + " " + props.size}
      >
        <SearchFieldInputDivDecorAirport
          props={props}
          className={
            "SearchFieldInputDivDecorAirport" + props.typ + " " + props.size
          }
        />
        <SearchFieldInputDivDecorImg
          props={props}
          className={
            "SearchFieldInputDivDecorImg" + props.typ + " " + props.size
          }
        />
      </SearchFieldInputDivDecor>
    </SearchFieldDecor>
  );
}

export default SearchFieldDecorations;
