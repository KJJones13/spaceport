class Being {
  constructor(name, species) {
    this.isAlive = true;
    this.credits = 0;
    this.name = name;
    this.species = species;
  }

  updateCredits(creditUpdate){
    this.credits = this.credits + creditUpdate;
  }
}

module.exports = Being;
