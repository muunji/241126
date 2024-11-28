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

// function sev(a,b) {
  
//   let ctValue = new contents(a,b).contentsValue();

//   const comp = compileTemplate(ctValue);
//   response.writeHead(200,{'Content-Type':'text/html'});
//   response.end(comp);
// }