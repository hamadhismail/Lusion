const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('class Audios');
if (idx === -1) idx = js.indexOf('Audios=');
if (idx === -1) idx = js.indexOf('audios=');
console.log('Audios at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 200, idx + 2000));
}
