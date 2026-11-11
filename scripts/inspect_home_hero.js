const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('class HomeHeroSection');
console.log('--- HomeHeroSection ---');
console.log(js.substring(idx, idx + 4000));
