import React from "react";
import styled /* , { css }  */ from "styled-components";

const DestCards = [
  { City: "Краснодар", Country: "Россия", Comments: null },
  { City: "Сочи", Country: "Россия", Comments: null },
  { City: "Санкт-Петербург", Country: "Россия", Comments: null },
  { City: "Минеральные Воды", Country: "Россия", Comments: null },
  { City: "Симферополь", Country: "Россия", Comments: "Крым" },
  { City: "Барселона", Country: "Испания", Comments: null }
];

function TopDestCardString(val) {
  if (val) {
    return val;
  } else return "";
}

function TopDestCards() {
  return DestCards.map(
    number =>
      TopDestCardString(number.City) +
      " " +
      TopDestCardString(number.Country) +
      " " +
      TopDestCardString(number.Comments) +
      " | "
  );
}

export default TopDestCards;
