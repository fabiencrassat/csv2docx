import docxTemplates from 'docx-templates';
import { log } from './log';

export default async function createReport(data: JSON[]): Promise<void> {
  log('Creating docx report...');
  docxTemplates({
    cmdDelimiter: ['{', '}'],
    data: { data },
    output: 'reports/myReport.docx',
    template: 'templates/myTemplate.docx',
  });
  log('Docx report created!');
}
