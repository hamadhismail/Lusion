const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/7b814882-fd70-4985-b154-5c06970c7bd0/.system_generated/steps/88/output.txt', 'utf8'));
const text = data.normalized_result.steps[1].artifacts.dom.value.text;
console.log('DOM length:', text.length);
let match = text.match(/<pre[^>]*>([\s\S]*)<\/pre>/i);
let js = match ? match[1] : text;
js = js.replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>')
       .replace(/&amp;/g, '&')
       .replace(/&quot;/g, '"')
       .replace(/&#39;/g, "'");
fs.writeFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', js);
console.log('Saved lusion_bundle.js, size:', js.length);
console.log('JS preview:', js.substring(0, 300));
