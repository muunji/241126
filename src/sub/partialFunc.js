import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//-------------handlebars
import Handlebars from 'handlebars';
const pathHandle = path.join(__dirname,"../../public/index.handlebars")
const template = fs.readFileSync(pathHandle,'utf-8');
const compileTemplate = Handlebars.compile(template);

// const pathHeader = path.join(__dirname,"../public/partial/header.hbs")
// const headerTemplate = fs.readFileSync(pathHeader,'utf-8');
// Handlebars.registerPartial('header',headerTemplate);

export default function usePartial(fileDirec,tag) {
  const pathTag = path.join(__dirname,"../"+fileDirec)
  const tagTemplate = fs.readFileSync(pathTag,'utf-8');
  Handlebars.registerPartial(tag,tagTemplate);
  }