const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('quickLoader$1');
console.log('quickLoader$1 at:', idx);
if (idx !== -1) {
  console.log(js.substring(Math.max(0, idx - 400), idx + 2000));
}
