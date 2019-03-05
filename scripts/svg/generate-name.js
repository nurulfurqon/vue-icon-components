/* eslint-disable no-console */
const fs = require('fs');

let dirJsFile;
let dirJsonFile;

if (process.env.NODE_ENV === 'icon') {
  dirJsFile = 'src/components/BlIconAv/icons/';
  dirJsonFile = 'src/components/BlIconAv/data/name.json';
}

console.log(`Getting name list from ${dirJsFile}`);
fs.readdir(dirJsFile, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    const fileNames = files
      .filter(file => file.indexOf('index.js') === -1)
      .map(file => file.substr(0, file.indexOf('.js')));
    console.log(`Generating json containing name in ${dirJsonFile}`);
    fs.writeFile(
      dirJsonFile,
      JSON.stringify(fileNames),
      // eslint-disable-next-line no-shadow
      (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      },
    );
  }
});
