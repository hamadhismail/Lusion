const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('preloader');
console.log('preloader at:', idx);
while (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 400));
  idx = js.indexOf('preloader', idx + 1);
  if (idx > 700000) break;
}
