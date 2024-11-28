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

//------------class, func
import handleClass from './sub/class.js';
import classFunc from './sub/func.js';

//------------handlebar object
let value = new handleClass("","");
value.contentsValue();

// 서버 생성
const server = http.createServer((request,response)=> {
  if(request.method === "GET") {
    if(request.url ==='/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(compileTemplate());
    }
  }
})

server.listen(3000,function(){
  console.log("http://localhost:3030");
})