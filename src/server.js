const http = require('http');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

function readTemplate(filePath) {
  return fs.readFileSync(path.join(__dirname,filePath),'utf-8');
}

//컴파일
const indexTemplate = Handlebars.compile(readTemplate('../public/index.handlebars'));
const headerTemplate = Handlebars.compile(readTemplate('../public/templates/header.handlebars'));
const mainTemplate = Handlebars.compile(readTemplate('../public/templates/main.handlebars'));
const footerTemplate = Handlebars.compile(readTemplate('../public/templates/footer.handlebars'));

//main Data
const mainData = {
  one: {title:'ONE',content:"This is the ONE section"},
  two: {title:'TWO',content:"This is the TWO section"},
  three: {title:'THREE',content:"This is the THREE section"}
};

//server
const server = http.createServer((req,res)=>{
  if(req.url.startsWith('../public/css/')) {
    const cssPath = path.join(__dirname, "/public/css/style.css");
    res.writeHead(200,{'content-type':'text/css'});
    res.end(fs.readFileSync(cssPath));
    return;
  }

  //main contents
  const key = req.url.slice(1) || 'one';
  const mainContent = mainData[key] || {title:"Not Found", content: "No content available"}

  //template data
  const html = indexTemplate({
    title: mainContent.title,
    header : headerTemplate(),
    main: mainTemplate(mainContent),
    footer: footerTemplate(),
  });

  //html 반환
  res.writeHead(200,{'content-type':'text/html'});
  res.end(html);
});

//서버 시작
server.listen(3000,()=>{
  console.log("http://localhost:3000")
})