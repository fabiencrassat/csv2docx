import child_process, { ExecException } from 'child_process';
import path from 'path';

function cli(args: string[]): Promise<{
  code: number, error: ExecException | null, stdout: string, stderr: string,
}> {
  return new Promise((resolve) => {
    child_process.exec(
      `node ${path.resolve('./bin_node/cli')} ${args.join(' ')}`,
      { cwd: '.' },
      (error, stdout, stderr) => {
        resolve({
          error,
          stderr,
          stdout,
          // tslint:disable-next-line: object-literal-sort-keys
          code: error && error.code ? error.code : 0,
        });
      },
    );
  });
}

const expectResult = (
  result: { code: number, error: ExecException | null, stdout: string, stderr: string },
  stdout: string): void => {
  expect(result.error).toBe(null);
  expect(result.stderr).toBe('');
  expect(result.stdout).toBe(stdout);
  expect(result.code).toBe(0);
};

describe('help information from cli command', () => {
  const helpMessage: string = `Usage: csv2docx [options] <file> <template> <report>

Import csv <file> against Word docx <template> to create Word docx <report>
Example: csv2docx e2e/sample.csv templates/myTemplate.docx reports/myReport.docx

Options:
  -V, --version  output the version number
  -h, --help     output usage information
`;

  it('should be without argument', async () => {
    const result = await cli([]);
    expectResult(result, helpMessage);
  });
  it('should be with -h', async () => {
    const result = await cli(['-h']);
    expectResult(result, helpMessage);
  });
  it('should be with --help', async () => {
    const result = await cli(['--help']);
    expectResult(result, helpMessage);
  });
});

describe('cli command', () => {
  const runMessage: string = `Importing e2e/sample.csv file
CSV file successfully processed
Creating docx report...
Docx report created!
`;

  it('should run', async () => {
    const result = await cli([
      'e2e/sample.csv',
      'templates/myTemplate.docx',
      'reports/myReport.docx',
    ]);
    expectResult(result, runMessage);
  });
});
