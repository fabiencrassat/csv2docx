import commander from 'commander';
import createReport from './create-report';
import importCsv from './import-csv';
import { log } from './log';
import version from './version';

const program = new commander.Command();
program
  .name('csv2docx')
  .version(version())
  .command('import <file>')
  .action(async (file: string) => {
    const data = await importCsv(file);
    createReport(data);
  });

// error on unknown commands
program.on('command:*', () => {
  log(`Error: unknown command: '${program.args.join(' ')}'`);
  process.exit(1);
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
