import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error('Error: FIGMA_TOKEN environment variable is required.');
  process.exit(1);
}

const FILE_KEY = 'ijAD7Lx6nPf0yh2lug3Q4y';
const BATCH_SIZE = 50;
const SLEEP_MS = 3000;
const DEST_DIR = 'illust-images';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchFigmaImages(nodeIds) {
  const ids = nodeIds.join(',');
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_simplify_stroke=true`;
  const res = await fetch(url, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  if (data.err) {
    throw new Error(`Figma API returned error: ${data.err}`);
  }
  return data.images;
}

async function downloadSvg(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Download failed ${res.status}: ${destPath}`);
  }
  const text = await res.text();
  const dir = dirname(destPath);
  await mkdir(dir, { recursive: true });
  await writeFile(destPath, text, 'utf-8');
}

async function main() {
  const nodesJson = await readFile(
    new URL('./illust-nodes.json', import.meta.url),
    'utf-8',
  );
  const nodes = JSON.parse(nodesJson);

  console.log(`Total nodes: ${nodes.length}`);
  console.log(`Batch size: ${BATCH_SIZE}`);
  console.log(`Batches: ${Math.ceil(nodes.length / BATCH_SIZE)}`);
  console.log();

  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < nodes.length; i += BATCH_SIZE) {
    const batch = nodes.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(nodes.length / BATCH_SIZE);

    console.log(
      `[Batch ${batchNum}/${totalBatches}] Fetching ${batch.length} SVG URLs...`,
    );

    const nodeIds = batch.map((n) => n.id);
    let images;
    try {
      images = await fetchFigmaImages(nodeIds);
    } catch (err) {
      console.error(`  Batch ${batchNum} API call failed: ${err.message}`);
      failed += batch.length;
      if (i + BATCH_SIZE < nodes.length) {
        console.log(`  Sleeping ${SLEEP_MS}ms before retry...`);
        await sleep(SLEEP_MS);
      }
      continue;
    }

    // Download SVGs in parallel (within batch)
    const downloadPromises = batch.map(async (node) => {
      const svgUrl = images[node.id];
      if (!svgUrl) {
        console.error(`  No URL for ${node.name} (${node.id})`);
        failed++;
        return;
      }
      const destPath = join(DEST_DIR, node.category, `${node.filename}.svg`);
      try {
        await downloadSvg(svgUrl, destPath);
        downloaded++;
      } catch (err) {
        console.error(`  Download failed: ${destPath} - ${err.message}`);
        failed++;
      }
    });

    await Promise.all(downloadPromises);
    console.log(`  Downloaded: ${downloaded}/${nodes.length} (failed: ${failed})`);

    // Sleep between batches to respect rate limit
    if (i + BATCH_SIZE < nodes.length) {
      await sleep(SLEEP_MS);
    }
  }

  console.log();
  console.log(`Done! Downloaded: ${downloaded}, Failed: ${failed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
