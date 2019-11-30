import importCsv from './import-csv';
import { log } from './log';

jest.mock('./log');

describe('import-csv', () => {
  it('should run', async () => {
    const data = await importCsv('e2e/sample.csv');
    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(1, 'Importing e2e/sample.csv file');
    expect(log).toHaveBeenNthCalledWith(2, 'CSV file successfully processed');
    expect(data).toStrictEqual([
      { Name: 'John', Surname: 'Snow', Age: '26', Gender: 'M' },
      { Name: 'Clair', Surname: 'White', Age: '33', Gender: 'F' },
      { Name: 'Fancy', Surname: 'Brown', Age: '78', Gender: 'F' },
    ]);
  });
});
