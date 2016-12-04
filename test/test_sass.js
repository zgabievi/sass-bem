const path = require('path');
const sass_true = require('sass-true');

const sassFile = path.join(__dirname, 'test.scss');
sass_true.runSass({file: sassFile}, describe, it);
