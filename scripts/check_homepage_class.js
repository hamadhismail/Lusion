const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('class HomePage extends');
if (idx === -1) idx = js.indexOf('homePage = new');
if (idx === -1) idx = js.indexOf('homePage=new');
console.log('homePage at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 1000));
}
