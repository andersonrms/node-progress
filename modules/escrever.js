const fs = require('fs').promises;

module.exports = (root, data) => {
    fs.writeFile(root, data, { flag: 'w', encoding: 'utf-8' })
}
