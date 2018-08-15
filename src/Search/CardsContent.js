const CardContent = [
  {
    id: 1,
    category: "mostchipest",
    price: 7712,
    bagaj: { hand: 5, main: 15, add: null },
    prov: "Clickavia",
    provadd: null,
    flighttype: "Чартер",
    to: {
      company: "rossia",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "00:05",
      TimeTo: "03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "rossia",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "10:35",
      TimeTo: "17:10",
      FlightTimeH: "4",
      FlightTimeM: "35",
      FlightType: "Прямой"
    }
  },
  {
    id: 2,
    category: "mostfast",
    price: 9269,
    bagaj: { hand: null, main: 20, add: null },
    prov: "Biletix",
    provadd: [
      { name: "Svyaznoy Travel", price: 9275 },
      { name: "Билетик Аэро", price: 9587 }
    ],
    flighttype: "Чартер",
    provaddnum: 4,
    ticketsnum: 4,
    to: {
      company: "fly",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "07:30",
      TimeTo: "09:50",
      FlightTimeH: "4",
      FlightTimeM: "20",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "11:20",
      TimeTo: "17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "CDG"
    }
  },
  {
    id: 3,
    category: "best",
    price: 8029,
    bagaj: { hand: 5, main: 0, add: null },
    bagajcomment: "Нет багажа",
    prov: "Билетик Аэро",
    provadd: null,
    flighttype: null,
    to: {
      company: "nordwind1",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "00:15",
      TimeTo: "03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind1",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "10:45",
      TimeTo: "17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    id: 4,
    category: null,
    price: 8164,
    bagaj: { hand: 5, main: 0, add: { hand: 5, main: 12, price: 136 } },
    prov: "Aviakassa",
    provadd: null,
    bagajcomment: "Нет багажа",
    flighttype: "Чартер",
    to: {
      company: "nordwind2",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "00:15",
      TimeTo: "03:10",
      FlightTimeH: "4",
      FlightTimeM: "55",
      FlightType: "Прямой"
    },
    from: {
      company: "nordwind2",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "10:45",
      TimeTo: "17:15",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    }
  },
  {
    id: 5,
    category: null,
    price: 8240,
    bagaj: { hand: 10, main: 0, add: { hand: 10, main: 20, price: 267 } },
    prov: "Билетик Аэро",
    provadd: [
      { name: "CLickavia", price: 8302 },
      { name: "Aviakassa", price: 8376 }
    ],
    flighttype: "Чартер",
    provaddnum: 4,
    to: {
      company: "redwings",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "07:00",
      TimeTo: "09:30",
      FlightTimeH: "4",
      FlightTimeM: "30",
      FlightType: "Прямой"
    },
    from: {
      company: "redwings",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "11:00",
      TimeTo: "17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    id: 6,
    category: null,
    price: 9108,
    bagaj: { hand: 10, main: 15, add: null },
    prov: "Clickavia",
    provadd: null,
    flighttype: "Чартер",
    to: {
      company: "redwings",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "00:05",
      TimeTo: "03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "rossia",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "11:00",
      TimeTo: "17:10",
      FlightTimeH: "4",
      FlightTimeM: "10",
      FlightType: "Прямой"
    }
  },
  {
    id: 7,
    category: null,
    price: 9485,
    bagaj: { hand: null, main: 15, add: null },
    prov: "Clickavia",
    provadd: null,
    flighttype: "Чартер",
    to: {
      company: "rossia",
      DateFrom: "24 фев 2018, Сб",
      DateTo: "24 фев 2018, Сб",
      TimeFrom: "00:05",
      TimeTo: "03:05",
      FlightTimeH: "5",
      FlightTimeM: "0",
      FlightType: "Прямой"
    },
    from: {
      company: "fly",
      DateFrom: "3 мар 2018, Сб",
      DateTo: "3 мар 2018, Сб",
      TimeFrom: "11:20",
      TimeTo: "17:35",
      FlightTimeH: "4",
      FlightTimeM: "15",
      FlightType: "Прямой"
    }
  }
];

export default CardContent;
