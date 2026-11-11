const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

console.log(js.substring(1204000, 1205500));
