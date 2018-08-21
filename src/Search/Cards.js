/* import React from "react";
import styled, { css } from "styled-components";

import small_russia from "../img/rossia_small_icon.png";
import small_fly from "../img/fly_small_icon.png";
import small_redwings from "../img/redwings_small_icon.png";

import big_russia from "../img/rossia_big_icon.png";
import big_fly from "../img/fly_big_icon.png";
import big_redwings from "../img/redwings_big_icon.png";
import nordwind1 from "../img/nordwind1_big_icon.png";
import nordwind2 from "../img/nordwind2_big_icon.png";

import chipest from "../img/mostchipest.png";
import speedest from "../img/lightning.png";
import best from "../img/best.png";

import flightto from "../img/small_aeroplane.svg";
import flightfrom from "../img/small_aeroplane_from.svg";
import clock from "../img/clock.svg";

import mainbagaja from "../img/mainbagaje.svg";
import handbagaja from "../img/handbagaje.svg";

import CardContent from "./CardsContent"; */
import CardMobile from "./CardMobile";

import CardTablet from "./CardTablet";
import CardDesktop from "./CardDesktop";

function SearchCards(props) {
  const size = props.size;
  if (size === "mobile") {
    return CardMobile(props);
  } else if (size === "tablet") {
    return CardTablet(props);
  } else if (size === "desktop") {
    return CardDesktop(props);
  }
}

export default SearchCards;
