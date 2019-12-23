const execa = require("execa");

const cwd = process.cwd();
const options = {
  stdio: "inherit",
  cwd
};
const shell = (mes, opts) => execa.shell(mes, {...options, ...opts});

module.exports = shell;