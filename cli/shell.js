const shell = require('shelljs');

shell.cd('git');
if (!shell.which('yarn')) {
  shell.echo('Sorry, this script requires yarn');
  shell.echo('Please use npm -g install yarn');
  shell.exit(1);
}
// shell.rm('-rf', 'node_modules');
shell.exec('yarn');