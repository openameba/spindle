import cliProgress from 'cli-progress';
import { promises as fs } from 'fs';
import { download } from '../lib/download';
import { figma } from '../lib/figma';

const ALIAS_ALL_ICON = 'ALL';

type FigmaConfig = {
  fileKey: string;
  nodeId: string;
  dest: string;
  iconNames: string[] | typeof ALIAS_ALL_ICON;
};

const FIGMA_CONFIG = 'figma.json';

const readConfig = async (): Promise<FigmaConfig> => {
  try {
    const file = await fs.readFile(FIGMA_CONFIG, 'utf-8');
    const json = JSON.parse(file);
    return Promise.resolve(json);
  } catch (err) {
    return Promise.reject(err);
  }
};

const progress = new cliProgress.SingleBar(
  {
    format:
      'Download Progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {name}',
  },
  cliProgress.Presets.shades_classic,
);

const sleep = (delayMS: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delayMS));

const getIcons = async (): Promise<void> => {
  try {
    const { fileKey, nodeId, dest, iconNames } = await readConfig();

    if (!iconNames) {
      throw Error(
        'No icon name specified. You can set "ALL" to get all icons.',
      );
    }

    const result = await figma.getFileNodes(fileKey, [nodeId]);
    const components = result.nodes[nodeId]?.components ?? {};
    const icons = Object.keys(components).map((key) => [
      key,
      components[key].name,
    ]);
    const iconNodePromises =
      iconNames === ALIAS_ALL_ICON
        ? icons.map((icon) => Promise.resolve(icon))
        : icons
            .filter(([, name]) => iconNames.includes(name))
            .map((icon) => Promise.resolve(icon));

    progress.start(iconNodePromises.length, 0, { name: '-' });

    // Request icon one by one to avoid too many requests to Figma API
    for (const currentPromise of iconNodePromises) {
      const [nodeId, name] = await currentPromise;

      // To avoid exceeding API rate limit
      // Sleeping time depends on the number of icons to download
      await sleep(3000);

      const svgNode = await figma.getImage(fileKey, {
        ids: nodeId,
        scale: 1,
        format: 'svg',
        svg_simplify_stroke: true,
      });
      const svgUrl = svgNode.images[nodeId];

      const pdfNode = await figma.getImage(fileKey, {
        ids: nodeId,
        scale: 1,
        format: 'pdf',
      });
      const pdfUrl = pdfNode.images[nodeId];

      if (!svgUrl || !pdfUrl) {
        throw new Error(`Icon URL is not found. node ID: ${nodeId}`);
      }

      await Promise.all([
        download({ destination: `${dest}/svg/${name}.svg`, url: svgUrl }),
        download({ destination: `${dest}/pdf/${name}.pdf`, url: pdfUrl }),
      ]);

      progress.increment(undefined, { name });
    }

    progress.stop();

    return Promise.resolve();
  } catch (err) {
    progress.stop();

    return Promise.reject(err);
  }
};

getIcons()
  .then(() => console.log('Icon download has been successfully finished!'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
