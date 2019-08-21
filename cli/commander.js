const program = require("commander");

program
  .command("init") // 命令
  .alias("i") // 别名
  .description("初始化模块") // 描述，用于--help展示
  .option("-i, --init [projectName]", "初始化项目") // 定义参数
  // 注册callback
  .action(option => {
    console.log(option);
  })
  // 自定义帮助信息
  .on('--help', function() {
    console.log('')
    console.log('Examples:')
    console.log('mycli init app --help')
});

program.version("0.0.1", "-v, --version");

program.parse(process.argv);
