const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('class Settings');
console.log('class Settings at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 1500));
}
