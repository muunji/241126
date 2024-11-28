import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Handlebars from 'handlebars'
const pathHandle = path.join(__dirname,"../../public/index.handlebars")
const template = fs.readFileSync(pathHandle,'utf-8');

const compileTemplate = Handlebars.compile(template);

import Contents from './class.js'


export default function serv(testV, colorV, response) {
  let ctV = new Contents(testV,colorV).contentsValue();

  const comp = compileTemplate(ctV);
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end(comp);
}