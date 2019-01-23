const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/kpi-element/runtime.js',
    './dist/kpi-element/polyfills.js',
    './dist/kpi-element/scripts.js',
    './dist/kpi-element/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/kpi-element.js');
  await fs.copyFile(
    './dist/kpi-element/styles.css',
    'elements/styles.css'
  );
})();
