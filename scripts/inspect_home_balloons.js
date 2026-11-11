const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('class HomeBalloons');
if (idx === -1) idx = js.indexOf('homeBalloons=');
if (idx === -1) idx = js.indexOf('homeBalloons =');
console.log('homeBalloons at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 200, idx + 4000));
}
