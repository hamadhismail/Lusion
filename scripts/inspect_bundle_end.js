const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

console.log('--- End of bundle (last 1500 chars) ---');
console.log(js.substring(js.length - 1500));
