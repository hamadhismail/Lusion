const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('setUrl()');
if (idx === -1) idx = js.indexOf('setUrl(');
console.log('setUrl at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 100, idx + 800));
}
