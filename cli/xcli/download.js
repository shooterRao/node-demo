const download = require("download-git-repo");
const createLogger = require("progress-estimator");
const logUpdate = require("log-update");
const ora = require("ora");

const loadGit = opts => {
  return new Promise((resolve, reject) => {
    const { gisType, projectName } = opts;
    // 保存路径
    const dirUrl = `${process.cwd()}/${projectName}`;
    if (gisType === "强gis") {
      download(
        "direct:https://github.com/shooterRao/arcgis-webpack-vue.git",
        dirUrl,
        {
          clone: true
        },
        err => {
          if (err) {
            // console.log(err);
            reject(err);
          }
          resolve();
        }
      );
    } else {
      reject("暂无弱gis版本模板！");
    }
  });
};

logUpdate.done = () => {
  logUpdate.clear();
  ora("拉取模板成功！").succeed();
};

const logger = createLogger({
  logFunction: logUpdate
});

module.exports = async opts => {
  await logger(loadGit(opts), "正在拉取模板...", {
    estimate: 3000
  });
};
