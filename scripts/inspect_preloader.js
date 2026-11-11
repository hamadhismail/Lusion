const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('class Preloader');
if (idx === -1) idx = 1242300;
console.log(js.substring(idx, idx + 2500));
