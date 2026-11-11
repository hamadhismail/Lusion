const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('properties.loader');
console.log('--- properties.loader ---');
while (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 200));
  idx = js.indexOf('properties.loader', idx + 1);
  if (idx > 700000) break;
}
