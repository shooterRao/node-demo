const ora = require('ora');

const spinner = ora();

setTimeout(() => {
  spinner.start('正在更新版本号');
  spinner.succeed('更新版本号成功')
  spinner.succeed('更新abc成功')
  spinner.start('正在更新xxx');
  setTimeout(() => spinner.succeed('更新xxx成功'), 2000);
  setTimeout(() => {
    spinner.fail('更新xxx不成功')
  }, 3000)
}, 1000);
