const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('vert$l=');
if (idx === -1) idx = js.indexOf('vert$l =');
console.log('vert$l at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx, idx + 1500));
}

let idx2 = js.indexOf('frag$p=');
if (idx2 === -1) idx2 = js.indexOf('frag$p =');
console.log('frag$p at:', idx2);
if (idx2 !== -1) {
  console.log(js.substring(idx2, idx2 + 2500));
}
