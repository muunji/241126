//title, main
//main = {bgColor, name}

export default class contents {
  constructor (titleValue, bgColorValue, nameValue) {
    this.titleValue = titleValue;
    this.bgColorValue = bgColorValue;
    this.nameValue = nameValue;
  }
  contentsValue(){
    let result = {title:this.titleValue, bgColor: this.bgColorValue, name:this.nameValue};
    return result;
  }
}