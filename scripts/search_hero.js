const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

// Find occurrences of cross.buf or home-hero
let idx = 0;
while ((idx = js.indexOf('cross.buf', idx)) !== -1) {
  console.log('--- cross.buf context ---');
  console.log(js.substring(Math.max(0, idx - 400), Math.min(js.length, idx + 600)));
  idx += 9;
}
