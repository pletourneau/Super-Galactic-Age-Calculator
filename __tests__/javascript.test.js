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


});
  