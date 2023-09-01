import Person from './../src/galactic.js';

describe('Character', () => {
  let picardPerson;

beforeEach(() => {
  picardPerson = new Person("Captain Jean-Luc Picard", 83);
});

test('it should return the ageOnEarth and name properties of the Character class instance paulsPerson and picardPerson', () => {
  expect(picardPerson).toEqual({name: "Captain Jean-Luc Picard", ageOnEarth: 83});
});

test('it should return the ageOnMercury of the Character class instance paulsPerson and picardPerson', () => {
  expect(picardPerson.mercuryAge()).toEqual("345.83");
});




});
  