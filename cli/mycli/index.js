const program = require('commander');

// shell
const shell = require('./shell');

program.usage('<command> [options]');

program
  .command('create [projectName]') // 命令
  .alias('c') // 别名
  .description('创建项目') // 描述，用于--help展示
  // .option("-c, --create <projectName>") // 定义参数
  // 注册callback
  .action(name => {
    console.log(name);
  })
  //自定义帮助信息
  .on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('mycli create app');
  });

// git
program
  .command('git push <message>')
  .alias('gp')
  .description('git push')
  .action(async message => {
    try {
      await shell('git add .');
      await shell(`git commit -m '${message}'`);
      // await shell(`git commit -am '${message}'`);
      await shell('git push');
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('git commit <message>')
  .alias('gcm')
  .description('git commit')
  .action(async message => {
    try {
      await shell('git add .');
      await shell(`git commit -m '${message}'`);
      // await shell(`git commit -am '${message}'`);
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('git commit amend <message>')
  .alias('gcma')
  .description('git commit amend(修改上次commit描述信息)')
  .action(async message => {
    try {
      await shell(`git commit --amend -m '${message}'`);
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('gitmerge <branch>')
  .alias('gm')
  .description('git merge 分支')
  .action(async branch => {
    console.log(branch);
    try {
      await shell(`git merge --no-edit --no-ff ${branch}`);
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('startmdb')
  .alias('mdb')
  .description('启动 mongoDB')
  .action(async () => {
    try {
      await shell(`mongod -f /Users/raojw/study/MongoDB/mongodb.conf`);
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('seemdb')
  .alias('smdb')
  .description('查看 mongoDB 进程')
  .action(async () => {
    try {
      await shell(`ps -ef | grep mongo`);
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('chrome')
  .alias('ch')
  .description('chrome 9222')
  .action(async () => {
    try {
      await shell(`/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary --remote-debugging-port=9222`, {
        // cwd: '/Users/raojw/Applications/Google'
      });
    } catch (error) {
      console.log(error);
    }
  });

program.version('0.0.1', '-v, --version');

program.parse(process.argv);

// console.log('hello');
