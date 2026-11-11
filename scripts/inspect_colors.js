const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('sphereData');
console.log('--- sphereData ---');
console.log(js.substring(Math.max(0, idx - 400), idx + 1500));

let idxColors = js.indexOf('COLORS$1');
console.log('--- COLORS$1 ---');
console.log(js.substring(Math.max(0, idxColors - 200), idxColors + 600));
