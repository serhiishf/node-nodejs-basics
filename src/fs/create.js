import { access, constants } from 'node:fs/promises';
import { writeFile } from 'node:fs';

const create = async () => {
  const pathToFile = 'src/fs/files/fresh.txt';
  try {
    await access(pathToFile, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      writeFile(pathToFile, 'I am fresh and young', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    } else {
      console.error('Caught error:', error.message);
      throw error;
    }
  }
};

await create();
