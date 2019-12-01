import docxTemplates from 'docx-templates';
import { log } from './log';

export default async function createReport(
  data: JSON[],
  template: string,
  output: string,
): Promise<void> {
  log('Creating docx report...');
  docxTemplates({
    output,
    template,
    // tslint:disable-next-line: object-literal-sort-keys
    data: { data },
  });
  log('Docx report created!');
}
