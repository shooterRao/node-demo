const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "gisType",
    message: "选择项目类型",
    choices: ["强gis", "弱gis"]
  }
];

module.exports = name => {
  return name
    ? inquirer.prompt(questions)
    : inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "请输入项目名",
          default: "xdata-project"
        },
        ...questions
      ]);
};
