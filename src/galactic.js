export default class Person {
  constructor(name, ageInYears) {
    this.name = name;
    this.ageOnEarth = ageInYears;
  }
  mercuryAge(){
    this.ageOnMercury = (ageInYears/.24).toFixed(2);
  }
 

}