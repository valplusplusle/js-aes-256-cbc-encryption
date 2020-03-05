var fs = require('fs');
var crypto = require('crypto');

var argumentArray = [];

process.argv.forEach((val, index) => {
    argumentArray[index] = val;
});

cryptTar(argumentArray[2], argumentArray[3], argumentArray[4])

function cryptTar(pathToFile, pathToSave, key) {   
    var cipher = crypto.createDecipheriv('aes-256-cbc', key);
    var input = fs.createReadStream(pathToFile);
    var output = fs.createWriteStream(pathToSave);
    input.pipe(cipher).pipe(output);
  
    output.on('finish', function() {
      console.log('Encrypted file written to disk!');
    });
  }
