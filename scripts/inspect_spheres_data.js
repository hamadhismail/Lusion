const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('SPHERES_DATA');
console.log('--- SPHERES_DATA and COLORS ---');
console.log(js.substring(Math.max(0, idx - 500), idx + 2000));
