const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/7b814882-fd70-4985-b154-5c06970c7bd0/.system_generated/steps/19/output.txt', 'utf8'));
let html = data.normalized_result.steps[1].artifacts.dom.value.text;

// Replace the CSS and JS paths to point to our local files
html = html.replace('/_astro/about.CNa9RfUh.css', './lusion_style.css');
html = html.replace('/_astro/hoisted.CUO_IjfL.js', './app.js');

// Also remove Google Analytics to prevent network tracking errors
html = html.replace(/<script async="" src="https:\/\/www\.googletagmanager\.com.*?<\/script>/s, '');
html = html.replace(/<script>\s*window\.dataLayer\s*=[\s\S]*?<\/script>/s, '');

fs.writeFileSync('C:/Users/User/Desktop/lusion/index.html', html);
console.log('Saved index.html, size:', html.length);
