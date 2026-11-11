const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('class HomePage');
console.log('class HomePage at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx, idx + 1000));
}
