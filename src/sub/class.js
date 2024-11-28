//title, main-backgroundColor, firstname

export default class contents {
  constructor (textValue, colorValue) {
    this.colorValue = colorValue;
    this.textValue = textValue;
  }
  contentsValue(){
    let result = {test:this.textValue, color: this.colorValue};
    return result;
  }
}