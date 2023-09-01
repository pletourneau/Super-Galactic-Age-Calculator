export default class Person {
  constructor(name, ageInYears) {
    this.name = name;
    this.ageOnEarth = ageInYears;
  }
  mercuryAge(){
    this.ageOnMercury = (this.ageOnEarth/.24).toFixed(2);
    return this.ageOnMercury;
  }
 
  venusAge(){
    this.ageOnVenus = (this.ageOnEarth/.62).toFixed(2);
    return this.ageOnVenus;
  }

  marsAge(){
    this.ageOnMars = (this.ageOnEarth/1.88).toFixed(2);
    return this.ageOnMars;
  }

  jupiterAge(){
    
  }
}