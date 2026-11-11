const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

let idx = js.indexOf('BufferGeometry');
console.log('BufferGeometry occurrences count:');
const matches = [];
while (idx !== -1) {
  matches.push(idx);
  idx = js.indexOf('BufferGeometry', idx + 1);
}
console.log('Count:', matches.length);
// Let's inspect where binary data/buffer parsing is done into BufferGeometry
for (const m of matches) {
  const snippet = js.substring(m - 100, m + 300);
  if (snippet.includes('.buf') || snippet.includes('Float32Array') || snippet.includes('Uint16Array') || snippet.includes('parse')) {
    console.log('--- snippet at', m, '---');
    console.log(snippet);
  }
}
