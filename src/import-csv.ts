import csvParser from 'csv-parser';
import fs from 'fs';
import { log } from './log';

function readStream(csvPath: string): Promise<JSON[]> {
  return new Promise((resolve) => {
    let data: JSON[] = [];

    fs.createReadStream(csvPath)
    .pipe(csvParser())
    .on('data', (chunk: JSON) => {
      data = data.concat([chunk]);
    })
    .on('end', () => {
      log('CSV file successfully processed');
      resolve(data);
    });
  });
}

export default async function importCsv(csvPath: string): Promise<JSON[]> {
  log(`Importing ${csvPath} file`);
  return await readStream(csvPath);
}
