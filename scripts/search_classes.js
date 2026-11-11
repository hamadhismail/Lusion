const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

const regex = /models\/[a-zA-Z0-9_/.-]+/g;
const matches = [...new Set(js.match(regex) || [])];
console.log('models matches:', matches);

// Let's also look for home-hero
let idx = js.indexOf('home-hero');
console.log('home-hero at:', idx);
if (idx !== -1) {
  console.log(js.substring(idx - 200, idx + 400));
}

// Let's search for "HomeHero" or "Hero"
const classMatches = js.match(/class\s+([A-Z]\w*)/g) || [];
console.log('Class count:', classMatches.length);
console.log('Sample classes:', classMatches.slice(0, 30));
