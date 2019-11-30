import docxTemplates from 'docx-templates';
import createReport from './create-report';
import { log } from './log';

jest.mock('docx-templates');
jest.mock('./log');

describe('create-report', () => {
  it('should run', () => {
    createReport([]);
    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(1, 'Creating docx report...');
    expect(log).toHaveBeenNthCalledWith(2, 'Docx report created!');
    expect(docxTemplates).toHaveBeenCalledTimes(1);
    expect(docxTemplates).toHaveBeenCalledWith({
      cmdDelimiter: ['{', '}'],
      data: { data: [] },
      output: 'reports/myReport.docx',
      template: 'templates/myTemplate.docx',
    });
  });
});
