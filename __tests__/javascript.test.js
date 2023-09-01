import Person from './../src/galactic.js';

describe('Character', () => {
  let paulsPerson;
  let picardPerson;

beforeEach(() => {
  paulsPerson = new Person("Paul", 41);
  picardPerson = new Person("Captain Jean-Luc Picard", 83);
});

test('it should return the properties of the Character class instance paulsPerson and picardPerson', () => {
  expect(paulsPerson).toEqual({name: "Paul", ageInYears: 41});
  expect(picardPerson).toEqual({name: "Captain Jean-Luc Picard", ageInYears: 83});
});

});
  