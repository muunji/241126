import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//-------------handlebars
import Handlebars from 'handlebars';

const pathHandle = path.join(__dirname,"../public/index.handlebars")
// console.log(pathHandle);

const template = fs.readFileSync(pathHandle,'utf-8');

const compileTemplate = Handlebars.compile(template);

// 서버 생성
const server = http.createServer((request,response)=> {
  if(request.method==="GET"){
  if(request.url === '/'){
    //h1태그
    const data = { test : "success"};

    const html = compileTemplate(data);

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(html);
  }
}

//form - input type submit
if(request.method ==="POST") {

  //form - action
  if(request.url ==="/clickButton"){
    //input을 눌렀을 때 값
    request.on("data",function(data){
      console.log(data.toString())

      if(data.toString().includes("one")){
        
        const h1data = { test : "one", color : "red"};
    
        const h1 = compileTemplate(h1data);
    
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(h1);
      } if (data.toString().includes("two")) {
        const h1dataTwo = { test : "two", color : "blue"};
    
        const h1Two = compileTemplate(h1dataTwo);
    
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(h1Two);
      } if (data.toString().includes("three")) {
        const h1dataTre = { test : "three", color : "green"};
    
        const h1Tre = compileTemplate(h1dataTre);
    
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(h1Tre);
      }
    })
  }
}
})

server.listen(3000,function(){
  console.log("http://localhost:3000");
})