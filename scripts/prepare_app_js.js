const fs = require('fs');
let js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

// Set CDN_PATH to https://lusion.dev so all textures, models, audios load seamlessly!
const target = 'let CDN_PATH="";window.location.hostname=="lusion.co"&&(CDN_PATH="https://lusion.dev");window.location.hostname=="lusion.dev"&&(window.location.href="https://lusion.co"+window.location.pathname+window.location.search);';
const replacement = 'let CDN_PATH="https://lusion.dev";';

if (js.includes(target)) {
  js = js.replace(target, replacement);
  console.log('Successfully replaced CDN_PATH target');
} else {
  console.log('Target string not found, searching alternative...');
  let idx = js.indexOf('let CDN_PATH=');
  console.log('Context:', js.substring(idx, idx + 200));
}

// Also check font paths:
// In CSS or JS, fonts are at /assets/fonts/
// Let's ensure fonts point to https://lusion.co/assets/fonts/ if local fonts aren't present
fs.writeFileSync('C:/Users/User/Desktop/lusion/app.js', js);
console.log('Saved app.js, size:', js.length);
