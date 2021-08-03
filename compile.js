const mjml2html = require('mjml');
const handlebars = require('handlebars');
const fs = require('fs');
const data = require('./data.json');

const mjmlContent = fs.readFileSync('03-index.mjml', 'utf-8');

const mjmlResult = mjml2html(mjmlContent);

const handlebarsTemplate = handlebars.compile(mjmlResult.html);

const emailContent = handlebarsTemplate(data);

fs.writeFileSync('./03-index.html', emailContent);
