import fs from 'fs';

export function getTestData(fileName: string) {
  const data = fs.readFileSync(`src/data/${fileName}`, 'utf-8');
  return JSON.parse(data);
}
