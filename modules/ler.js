const fs = require('fs').promises;

module.exports = (root) => fs.readFile(root, 'utf-8')