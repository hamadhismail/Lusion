const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('loader=');
if (idx === -1) idx = js.indexOf('loader =');
console.log('loader at:', idx);
while (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 400));
  idx = js.indexOf('loader=', idx + 1);
  if (idx > 700000) break;
}
