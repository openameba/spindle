import { createWriteStream, promises as fsPromise } from 'node:fs';
import { dirname } from 'node:path';
import axios from 'axios';

const checkOrCreateDestDir = (destDir: string): Promise<void> => {
  return fsPromise.access(destDir).catch((err) => {
    if (err.code === 'ENOENT') {
      return fsPromise.mkdir(destDir);
    }
    return Promise.reject(err);
  });
};

export const download = async ({
  destination = '',
  url = '',
}: {
  destination: string;
  url: string;
}): Promise<void> => {
  try {
    const destDir = dirname(destination);

    await checkOrCreateDestDir(destDir);

    const writer = createWriteStream(destination);
    const response = await axios({
      url,
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
