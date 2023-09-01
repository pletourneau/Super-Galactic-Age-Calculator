export default class Person {
  constructor(name, ageInYears) {
    this.name = name;
    this.ageOnEarth = ageInYears;
  }
  mercuryAge(){
    this.ageOnMercury = (this.ageOnEarth/.24).toFixed(2);
    return this.ageOnMercury;
  }
 

}