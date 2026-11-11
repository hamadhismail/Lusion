const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = 0;
while ((idx = js.indexOf('SoundBtn', idx)) !== -1) {
  console.log(js.substring(idx - 100, idx + 400));
  idx += 8;
}
