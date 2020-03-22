const validTypes = [
  'shell',
  'hyperdrive',
  'computer',
  'life support',
  'landing gear'
]
class Part {
  constructor(part) {

    this.broken = false;
    this.name = part.name;
    this.value = part.value;
    if (validTypes.includes(part.type)) {
        this.type = part.type;
    }
    else {
        this.type = undefined;
    }
  }
  updateValue(valueUpdate){
    this.value = this.value + valueUpdate;
  }
  isValid(){
    if(!this.name || !this.type || !this.value) {
      return false;
    }
    return true;
  }
}

module.exports = Part;
