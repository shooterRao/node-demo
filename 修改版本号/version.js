const fs = require('fs');
const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const formatTime = date => {
  function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute].map(formatNumber).join(':')
  );
};

function writeFile() {
  return new Promise((res, rej) => {
    fs.readFile(resolve('appConfig.json'), 'utf8', function(err, data) {
      if (err) {
        console.log(err)
        rej(err)
      }
      const config = JSON.parse(data);
      const { VERSION: version } = config;
      const newVersion = version.replace(/(\d)\W*\((.*)\)/, function(
        match,
        $1,
        $2
      ) {
        let num = +$1;
        let date = formatTime(new Date());
        return `${++num} (${date})`;
      });
      config.VERSION = newVersion;
    
      const json = JSON.stringify(config, null, 2);
    
      fs.writeFile(resolve('appConfig.json'), json, function(err) {
        if (err) {
          console.log(err)
          rej(err)
        }
        console.log('done');
        res(newVersion);
      });
    });
  })
}

(async function() {
  const version = await writeFile();
  console.log(version.split(' '));
})()
