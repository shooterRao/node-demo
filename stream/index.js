const fs = require('fs')

// 打开一个流:
const rs = fs.createReadStream(process.cwd() + '/demo.json', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk.toString());
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// 创建一个写入流
// const ws = fs.createWriteStream(process.cwd() + '/demo.json', 'utf-8')

// const obj = {
//   name: 'shooter',
//   age: 24
// }

// ws.write(JSON.stringify(obj, null, 2));
// ws.end();

// pipe 复制文件
fs.writeFile(process.cwd() + '/democopy.json', null, function(err, data) {
  if (err) {
    console.log(err);
  }

  const rs = fs.createReadStream(process.cwd() + '/demo.json');
  const ws = fs.createWriteStream(process.cwd() + '/democopy.json')

  rs.pipe(ws)

})
