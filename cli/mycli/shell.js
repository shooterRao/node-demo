const execa = require("execa");

const cwd = process.cwd();
const options = {
  stdio: "inherit",
  cwd
};
const shell = mes => execa.shell(mes, options);

module.exports = shell;