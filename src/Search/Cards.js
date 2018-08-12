import React from "react";
import styled, { css } from "styled-components";

const CardContent = [
  {
    category: "mostchipest",
    price: 7712,
    to: {
      company: "rossia",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "rossia",
      Times: "10:35 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "35",
      FlightType: "Прямой"
    }
  },
  {
    category: "mostfast",
    price: 9269,
    to: {
      company: "fly",
      Times: "07:30 - 09:50",
      FlightTimeH: "4",
      FlightTimeM: "20",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      Times: "11:20 - 17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "CDG"
    }
  },
  {
    category: null,
    price: 8029,
    to: {
      company: "nordwind1",
      Times: "00:15 - 03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind1",
      Times: "10:45 - 17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 8164,
    to: {
      company: "nordwind2",
      Times: "00:15 - 03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind2",
      Times: "10:45 - 17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    category: "best",
    price: 8240,
    to: {
      company: "redwings1",
      Times: "07:00 - 09:30",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    },
    from: {
      company: "redwings1",
      Times: "11:00 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 9108,
    to: {
      company: "redwings1",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "redwings2",
      Times: "11:00 - 17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    category: null,
    price: 9485,
    to: {
      company: "redwings2",
      Times: "00:05 - 03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      Times: "11:20 - 17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "Прямой"
    }
  }
];

function SearchCards(props) {
  console.log(CardContent);
  CardContent.map(Contnet => console.log(Contnet));
  return "А здесь поиск";
}

export default SearchCards;
