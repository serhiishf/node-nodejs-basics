import { copyFile, constants, cp } from 'node:fs';

const copy = async () => {
  await cp('src/fs/files', 'src/fs/files_copy', (err) => {
    console.error(err);
  });
};

await copy();
