const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('class HomeBalloons extends');
let idxEnd = js.indexOf('const homeBalloons=new HomeBalloons', idx);
if (idxEnd === -1) idxEnd = js.indexOf('const homeBalloons = new HomeBalloons', idx);
console.log('HomeBalloons definition length:', idxEnd - idx);
console.log(js.substring(idx, idx + 2500));
