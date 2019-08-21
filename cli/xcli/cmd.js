const program = require("commander");

const create = require('./create');

program.usage("<command> [options]");

program
  .command("create [projectName]") // <xxx> 必填，[xxx] 可填
  .alias("c")
  .description("创建项目")
  .action(name => {
    create(name);
  })
  //自定义帮助信息
  .on("--help", function() {
    console.log("");
    console.log("Examples:");
    console.log("mycli create app");
  });

program.version("0.0.1", "-v, --version");

program.parse(process.argv);
