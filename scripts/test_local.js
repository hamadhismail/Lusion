const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

// 1. Start server
require('./server.js');

setTimeout(() => {
  console.log('Testing chrome screenshot...');
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outPath = 'C:\\Users\\User\\Desktop\\lusion\\local_clone_screenshot.png';
  try {
    execSync(`"${chromePath}" --headless --disable-gpu --virtual-time-budget=8000 --screenshot="${outPath}" --window-size=1440,900 http://127.0.0.1:3456`, {
      timeout: 25000,
      stdio: 'inherit'
    });
    console.log('Chrome finished! Screenshot size:', fs.statSync(outPath).size);
  } catch (err) {
    console.error('Error running chrome:', err);
  }
  process.exit(0);
}, 2000);
