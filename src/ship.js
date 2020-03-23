const validTypes = [
  'cargo',
  'passenger',
  'military'
]
class Ship {
  constructor({name, type}) {
    this.name = name;
    this.type = type;
    if(validTypes.includes(type)) {
      this.type = type;
    }

    else {
       this.type = undefined;
    }
  }


}

module.exports = Ship;
