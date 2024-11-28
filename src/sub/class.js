export default class contents {
  constructor (colorValue, textValue) {
    this.colorValue = colorValue;
    this.textValue = textValue;
  }

  contentsValue() {
    return {color : this.colorValue, text: this.textValue}
  }
}