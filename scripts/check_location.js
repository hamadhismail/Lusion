const fs = require('fs');
const js = fs.readFileSync('C:/Users/User/Desktop/lusion/app.js', 'utf8');

const regex = /location\.(?:hostname|href|origin|host)/g;
let match;
while ((match = regex.exec(js)) !== null) {
  console.log('Match at', match.index, ':', js.substring(match.index - 50, match.index + 100));
}
