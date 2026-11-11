const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('class HomeBalloonsPhysics');
console.log('--- HomeBalloonsPhysics and HomeBalloons ---');
console.log(js.substring(idx, idx + 4000));
