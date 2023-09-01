import Person from './../src/galactic.js';

describe('Character', () => {
  let paulsPerson;
  let picardPerson;

beforeEach(() => {
  paulsPerson = new Person("Paul", 41);
  picardPerson = new Person("Captain Jean-Luc Picard", 83);
});

test('it should return the ageOnEarth and name properties of the Character class instance paulsPerson and picardPerson', () => {
  expect(paulsPerson).toEqual({name: "Paul", ageOnEarth: 41});
  expect(picardPerson).toEqual({name: "Captain Jean-Luc Picard", ageOnEarth: 83});
});

test('it should return the ageOnEarth and name properties of the Character class instance paulsPerson and picardPerson', () => {
  expect(paulsPerson).toEqual({name: "Paul", ageOnEarth: 41, ageOnMercury: 170.83});
  expect(picardPerson).toEqual({name: "Captain Jean-Luc Picard", ageOnEarth: 83, ageOnMercury: 345.83});
});


});
  