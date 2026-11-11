const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/lusion_bundle.js', 'utf8');

console.log('--- Search Key Terms ---');
const terms = [
  'cross', 'crosses', 'hero', 'tunnel', 'project', 'sound', 'audio',
  'depth', 'mouse', 'touch', 'canvas', 'physics', 'rapier', 'cannon',
  'gravity', 'spring', 'smooth', 'lenis', 'gsap', 'buffer', '.buf'
];

for (const t of terms) {
  const matches = [...js.matchAll(new RegExp(t, 'gi'))];
  console.log(`${t}: ${matches.length} matches`);
}

// Search for asset references and paths
const assetMatches = js.match(/https?:\/\/[^\s"'`)]+|assets\/[^\s"'`)]+/g) || [];
const uniqueAssets = [...new Set(assetMatches)].filter(a => !a.includes('w3.org') && !a.includes('schema.org'));
console.log('\n--- Discovered Asset Paths (first 30) ---');
console.log(uniqueAssets.slice(0, 30));

// Search for shaders or GLSL keywords
const shaderMatches = js.match(/(?:varying|uniform|attribute)\s+\w+\s+\w+;/g) || [];
console.log('\n--- Shader uniform/varying snippets count ---', shaderMatches.length);
if (shaderMatches.length > 0) {
  console.log('First few shader snippets:', shaderMatches.slice(0, 10));
}
