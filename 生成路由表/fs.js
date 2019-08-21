const fs = require("fs");
const path = require("path");
const ora = require("ora");

const resolve = dir => path.join(__dirname, dir);

const ROUTEDIR = resolve("./routes");

const GENFILENAME = "routes.json";

const spinner = ora("正在生成路由表").start();

// 获取
function getExportDefaultData(str) {
  let res = "";
  // 拿到export default后面的值
  str.replace(/(export\s*default)((\s|\n|.)*)/, function(value) {
    res = value.replace(/(export\s*default)/, "");
  });
  // 去掉空格、注释、component值
  res = res
    .replace(/\/\/.*/g, "")
    .replace(/(^\s+|\s+$|\s+)|(;)/g, "")
    .replace(/,component:(\w+)?|\(\).*?import\(.*?\)/g, "");
  return eval("(" + res + ")");
}

// 提取模块路由信息
function getModuleRoutes(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(ROUTEDIR, fileName), "utf-8", function(err, data) {
      if (err) {
        reject(err);
      }
      const res = getExportDefaultData(data);
      resolve(res);
    });
  });
}

// 异步读取routes
function readRoutesFile() {
  return new Promise((resolve, reject) => {
    fs.readdir(ROUTEDIR, async function(err, files) {
      if (err) {
        reject(err);
      }
      const promises = [];
      files.forEach(f => {
        if (f === "index.js") {
          return;
        }
        promises.push(getModuleRoutes(f));
      });
      try {
        const routes = await Promise.all(promises);
        resolve(routes);
      } catch (error) {
        reject(error);
      }
    });
  });
}

// 生成json文件
function genRoutesFile(source) {
  fs.writeFile(resolve(GENFILENAME), source, function(err) {
    if (err) {
      return console.error(err);
    }
    spinner.stop();
    ora("生成路由表成功").succeed();
  });
}

// 入口
async function start() {
  try {
    const routes = await readRoutesFile();
    const json = JSON.stringify(routes, null, 2);
    genRoutesFile(json);
  } catch (error) {
    spinner.stop();
    ora("生成路由表失败").fail();
    console.log(error);
  }
}

start();
