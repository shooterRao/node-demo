const chalk = require('chalk');
const log = console.log;
log(chalk.blue('Hello world!'));
log(chalk.white.bgGreen.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
RAM: ${chalk.greenBright('40%')}
DISK: ${chalk.yellow('70%')}
`);
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
log(chalk.keyword('orange')('Happy Coding!'))