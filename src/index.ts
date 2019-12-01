import commander from 'commander';
import createReport from './create-report';
import importCsv from './import-csv';
import version from './version';

const program = new commander.Command();
program
  .name('csv2docx')
  .version(version())
  .arguments('<file> <template> <report>')
  .description('Import csv <file> against Word docx <template> to create Word docx <report>\nExample: csv2docx e2e/sample.csv templates/myTemplate.docx reports/myReport.docx')
  .action(async (file: string, template: string, report: string) => {
    const data = await importCsv(file);
    createReport(data, template, report);
  });

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
