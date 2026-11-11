const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('settings=');
if (idx === -1) idx = js.indexOf('settings =');
console.log('settings at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 1000));
}
