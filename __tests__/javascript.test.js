import Person from './../src/galactic.js';

describe('Character', () => {
  let picardPerson;

beforeEach(() => {
  picardPerson = new Person("Captain Jean-Luc Picard", 83);
});

test('it should return the ageOnEarth and name properties of the Character class instance picardPerson', () => {
  expect(picardPerson).toEqual({name: "Captain Jean-Luc Picard", ageOnEarth: 83});
});

test('it should return the ageOnMercury of the Character class instance picardPerson', () => {
  expect(picardPerson.mercuryAge()).toEqual("345.83");
});

test('it should return the ageOnVenus of the Character class instance picardPerson', () => {
  expect(picardPerson.venusAge()).toEqual("133.87");
});

test('it should return the ageOnMars of the Character class instance picardPerson', () => {
  expect(picardPerson.marsAge()).toEqual("44.15");
});

test('it should return the ageOnJupiter of the Character class instance picardPerson', () => {
  expect(picardPerson.jupiterAge()).toEqual("7.00");
});

test('it should return the number of years until the Character class instance picardPerson turns the inputted number on each planet, where the inputted number is higher than his age', () => {
  expect(picardPerson.diff(89)).toEqual("6.00 Earth years until you are 89 on Earth, 25.00 Mercury years until you are 89 on Earth, 9.68 Venus years until you are 89 on Earth, 3.19 Mars years until you are 89 on Earth, and 0.51 Jupiter years until you are 89 on Earth");
});


test('it should return the number of years since the Character class instance picardPerson was the inputted number on each planet, where the inputted number is lower than his age', () => {
  expect(picardPerson.diff(74)).toEqual("9.00 Earth years since you were 74 on Earth, 37.50 Mercury years since you were 74 on Earth, 14.52 Venus years since you were 74 on Earth, 4.79 Mars years since you were 74 on Earth, and 0.76 Jupiter years since you were 74 on Earth");
});



});
  