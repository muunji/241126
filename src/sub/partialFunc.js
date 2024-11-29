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

// const pathFooter = path.join(__dirname,"../public/partial/footer.hbs")
// const footerTemplate = fs.readFileSync(pathFooter,'utf-8');
// Handlebars.registerPartial('footer',footerTemplate);

// const pathMain = path.join(__dirname,"../public/partial/main.hbs")
// const mainTemplate = fs.readFileSync(pathMain,'utf-8');
// Handlebars.registerPartial('main',mainTemplate);

export default function usePartial(dirname,tag) {
  const direc = `../../public/partial/${tag}.hbs`
  const path = path.join(dirname,direc);
  const Template = fs.readFileSync(path,'utf-8');
  Handlebars.registerPartial(`"${tag}"`,Template);
}