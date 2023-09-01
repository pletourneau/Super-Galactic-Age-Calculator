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
    this.ageOnJupiter = (this.ageOnEarth/11.86).toFixed(2);
    return this.ageOnJupiter;
  }

  diff(years) {
    let diff = years - this.ageOnEarth;
    if (diff > 0) {
      return diff.toFixed(2) + " Earth years until you are " + years + " on Earth, " + (diff/.24).toFixed(2) + " Mercury years until you are " + years + " on Earth, " + (diff/.62).toFixed(2) + " Venus years until you are " + years + " on Earth, " + (diff/1.88).toFixed(2) + " Mars years until you are " + years + " on Earth, and " + (diff/11.86).toFixed(2) + " Jupiter years until you are " + years + " on Earth";
    } else if (diff < 0) {
      return Math.abs(diff).toFixed(2) + " Earth years since you were " + years + " on Earth, " + (Math.abs(diff)/.24).toFixed(2) + " Mercury years since you were " + years + " on Earth, " + (Math.abs(diff)/.62).toFixed(2) + " Venus years since you were " + years + " on Earth, " + (Math.abs(diff)/1.88).toFixed(2) + " Mars years since you were " + years + " on Earth, and " + (Math.abs(diff)/11.86).toFixed(2) + " Jupiter years since you were " + years + " on Earth";
    } else {
      return "Captain, you entered the same stardate";
    }
  }
}