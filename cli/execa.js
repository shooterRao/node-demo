const execa = require('execa');

(async () => {
  const { stdout } = await execa('echo', ['unicorns']);
  // await execa.shell('cd', { cwd: 'aaa' });
  // execa.shellSync('ls', { stdio: 'inherit'})
	console.log(stdout);
	//=> 'unicorns'
})();

const hasYarn = async () => {
  try {
    const { stdout } = await execa.shell('yarn -v');
    console.log(stdout);
  } catch (error) {
    return false
  }
}

hasYarn();
