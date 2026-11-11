const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

let idx = js.indexOf('routeManager.addPath');
console.log('addPath at:', idx);
while (idx !== -1) {
  console.log(js.substring(idx - 50, idx + 200));
  idx = js.indexOf('routeManager.addPath', idx + 1);
}
