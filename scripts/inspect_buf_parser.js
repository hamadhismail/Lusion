const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('.buf');
while (idx !== -1) {
  console.log('--- .buf parser context at ' + idx + ' ---');
  console.log(js.substring(Math.max(0, idx - 200), Math.min(js.length, idx + 400)));
  idx = js.indexOf('.buf', idx + 1);
  if (idx > 300000) break; // just sample
}
