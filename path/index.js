const path = require('path');

console.log(__dirname)
console.log(__filename)

const resolve = dir => path.join(__dirname, dir)

console.log(resolve('test.json'))

console.log(process.cwd())

console.log(process.argv);

console.log(process.env);