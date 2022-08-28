import commander from 'commander';
const { program } = commander;
program.option('--first').option('-s, --separator <char>');
program.parse();
const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
//# sourceMappingURL=index.js.map