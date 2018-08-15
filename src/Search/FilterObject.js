const peresadki = {
  name: "Пересадки",
  objects: [
    { name: "Все", price: null },
    { name: "Без пересадок", price: 7712 },
    { name: "1 пересадка", price: 11150 },
    { name: "2 пересадки", price: 16821 },
    { name: "3 пересадки", price: 23986 }
  ]
};
const aliancies = {
  name: "Альянсы",
  objects: [
    { name: "Все", price: null },
    { name: "Star Alliance", price: 11150 },
    { name: "One World", price: 12370 },
    { name: "SkyTeam", price: 16290 }
  ]
};

const companies = {
  name: "Авиакомпании",
  objects: [
    { name: "Все", price: null },
    { name: "Aegean Airlines", price: 20357 },
    { name: "Air Algerie", price: 29105 },
    { name: "Air Europa", price: 22202 },
    { name: "Air France", price: 17050 },
    { name: "Air Moldova", price: 22613 },
    { name: "Alitlia", price: 22717 },
    { name: "Alitalia CityLiner", price: 22271 },
    { name: "Belle Air", price: 18371 },
    { name: "British Airways", price: 23839 },
    { name: "Brussels  Airlines", price: 11150 },
    { name: "Bulgaria Air", price: 20114 }
  ]
};

const Filters = { peresadki, aliancies, companies };

export default Filters;
