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

//partial 함수
import usePartial from './sub/partialFunc.js'
//partial 등록
usePartial("../public/partial/header.hbs",'header');
usePartial("../public/partial/main.hbs",'main');
usePartial("../public/partial/footer.hbs",'footer');

//------------class, func
import valueClass from './sub/class.js';
import valueFunc from './sub/func.js';


//------------handlebar object
let value = new valueClass("","");
value.contentsValue();

// 서버 생성
const server = http.createServer((request,response)=> {
  if(request.method === "GET") {
    //mainPage
    if(request.url ==='/'){
      valueFunc("test","#ccc","FIRST NAME",response)
    }
    if(request.url.includes ('style')) {
      const pathStyle = path.join(__dirname,"../public/css/style.css");
      const styleData = fs.readFileSync(pathStyle,"utf-8",function(err,data){
        if(err){
          console.error(err)
        } else {
          return data;
        }
      })
      response.writeHead(200, {'Content-Type':'text/css'});
      response.write(styleData);
      response.end();
    }
    //atag 눌렀을 때
    if(request.url.includes('kong')){
      valueFunc("test-KO","cadetblue","KONG",response)
    }
    if(request.url.includes('seo')){
      valueFunc("test-S","cornflowerblue","SEO",response)
    }
    if(request.url.includes('kim')){
      valueFunc("test-K","floralwhite","KIM",response)
    }
  }
})

server.listen(3030,function(){
  console.log("http://localhost:3030");
})