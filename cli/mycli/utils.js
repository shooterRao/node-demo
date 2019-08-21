function clearConsole() {
  process.stdout.write("\u001Bc");
}

exports.clearConsole = clearConsole;