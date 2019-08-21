const que = require("./question");
const download = require("./download");
const execa = require('execa');
const chalk = require('chalk');

const hasYarn = async () => {
  try {
    await execa.shell('yarn -v')
    return true
  } catch (error) {
    return false
  }
}

const create = async name => {
  // 提问
  const answer = await que(name);
  if (!answer.projectName) {
    answer.projectName = name;
  }
  try {
    // 下载模板
    await download(answer);
    const cwd = `${process.cwd()}/${answer.projectName}`;
    if (hasYarn()) {
      await execa.shell('yarn', { stdio: 'inherit' , cwd});
      console.log(chalk.keyword('orange')('🎉  Happy Coding!'));
    } else {
      throw new Error('找不到yarn模块，请安装yarn哦');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = create;
