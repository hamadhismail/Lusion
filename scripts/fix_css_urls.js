const fs = require('fs');
let css = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_style.css', 'utf8');

const urlMatches = css.match(/url\([^)]+\)/g) || [];
console.log('CSS URL matches:', urlMatches);

// Replace /assets/ with https://lusion.co/assets/ so web fonts and icons load properly
let updatedCss = css.replace(/url\(\/(assets\/[^)]+)\)/g, 'url(https://lusion.co/$1)');
updatedCss = updatedCss.replace(/url\('\/(assets\/[^)]+)'\)/g, "url('https://lusion.co/$1')");
updatedCss = updatedCss.replace(/url\("\/(assets\/[^)]+)"\)/g, 'url("https://lusion.co/$1")');

fs.writeFileSync('C:/Users/User/Desktop/lusion/lusion_style.css', updatedCss);
console.log('Updated lusion_style.css with CDN font urls.');
