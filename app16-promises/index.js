const fs = require('fs');

function getFileData() {
  return new Promise(function(resolve, reject) {
    fs.readFile('file2.csv', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

getFileData().then(data => console.log(data.toString())).catch(err => console.log(err));
