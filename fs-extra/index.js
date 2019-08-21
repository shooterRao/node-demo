const fs = require('fs-extra');
const path = require('path');

const resolve = dir => path.join(__dirname, dir);

// 判断是否为文件夹
const isDir = async dir => {
  const i = await fs.stat(dir);
  return i.isDirectory();
};

// 判断是否为文件
const isFile = async file => {
  const i = await fs.stat(file);
  return i.isFile();
};

// 先找出所有的文件目录
const PATH = resolve('/');

const collectDir = async () => {
  const dirs = [];
  const files = await fs.readdir(PATH);
  for (const file of files) {
    const filePath = resolve(file);
    const is = await isDir(filePath);
    is && dirs.push(filePath);
  }
  return dirs;
};

(async () => {
  const dirs = await collectDir();
  const data = await fs.readdir(PATH);
  for (const file of data) {
    if (await isFile(resolve(file))) {
      const dir = dirs.find(dir => {
        const d = path.basename(dir);
        // 判断名字是否包含文件一样的名字
        if (d.length >= file.length) {
          return d.includes(file);
        } else {
          return file.includes(d);
        }
      });
      if (dir) {
        await fs.move(resolve(file), path.resolve(dir, file));
      }
    }
  }
})();
