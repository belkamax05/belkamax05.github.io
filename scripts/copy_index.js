var fs = require('fs');
fs.createReadStream('build/index.html').pipe(fs.createWriteStream('index.html'));