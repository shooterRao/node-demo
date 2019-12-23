const path = require('path');

console.log(__dirname) // 当前文件执行路径
console.log(__filename)

const resolve = dir => path.join(__dirname, dir)

console.log(resolve('test.json'))

console.log(process.cwd()) // 当前程序运行路径，也就是在哪开始 node xxx 的

console.log(process.argv);

console.log(process.env);

// path.resolve()方法可以将多个路径解析为一个规范化的绝对路径
// path.join()方法可以连接任意多个路径字符串