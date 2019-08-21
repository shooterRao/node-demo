const createLogger = require("progress-estimator");
const logUpdate = require('log-update');
const chalk = require('chalk');
const ora = require('ora');

logUpdate.done = () => {
  logUpdate.clear()
  const oraa = ora('success!');
  oraa.succeed();
}

const logger = createLogger({
  // storagePath: join(__dirname, ".progress-estimator")
  logFunction: logUpdate
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1500);
});

async function run() {
  await logger(promise, "正在拉取...");
}

run();