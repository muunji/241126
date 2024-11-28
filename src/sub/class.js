export default class contents {
  constructor (colorValue, textValue) {
    this.colorValue = colorValue;
    this.textValue = textValue;
  }
  contentsValue(){
    let result = {test:this.textValue, color: this.colorValue};
    return result;
  }
}