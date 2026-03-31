import { readFile, writeFile } from 'node:fs/promises';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error('FIGMA_TOKEN required');
  process.exit(1);
}

const FILE_KEY = 'ijAD7Lx6nPf0yh2lug3Q4y';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getNodes(nodeIds) {
  const ids = nodeIds.join(',');
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(ids)}`;
  const res = await fetch(url, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN },
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return (await res.json()).nodes;
}

async function main() {
  const nodesJson = JSON.parse(await readFile('scripts/illust-nodes.json', 'utf-8'));
  const headNodes = nodesJson.filter((n) => n.category.startsWith('head/'));

  console.log(`Fetching bounds for ${headNodes.length} head nodes...`);

  const offsets = {};
  const BATCH = 50;

  for (let i = 0; i < headNodes.length; i += BATCH) {
    const batch = headNodes.slice(i, i + BATCH);
    const ids = batch.map((n) => n.id);

    console.log(`Batch ${Math.floor(i / BATCH) + 1}: ${batch.length} nodes`);
    const nodesData = await getNodes(ids);

    for (const node of batch) {
      const data = nodesData[node.id];
      if (!data || !data.document) {
        console.warn(`  No data for ${node.id} (${node.name})`);
        continue;
      }

      const doc = data.document;
      const bbox = doc.absoluteBoundingBox;
      const render = doc.absoluteRenderBounds;

      if (!bbox || !render) {
        console.warn(`  No bounds for ${node.id} (${node.name})`);
        continue;
      }

      // Offset = how far the rendered content extends beyond the frame
      const offsetX = parseFloat((bbox.x - render.x).toFixed(2));
      const offsetY = parseFloat((bbox.y - render.y).toFixed(2));

      // Only store non-zero offsets
      if (Math.abs(offsetX) > 0.5 || Math.abs(offsetY) > 0.5) {
        const key = `${node.category}/${node.filename}`;
        offsets[key] = { offsetX, offsetY };
      }
    }

    if (i + BATCH < headNodes.length) await sleep(3000);
  }

  console.log(`\nHead nodes with non-zero offset: ${Object.keys(offsets).length}`);

  await writeFile(
    'packages/spindle-illust-maker/src/constants/head-offsets.json',
    JSON.stringify(offsets, null, 2),
  );
  console.log('Saved to packages/spindle-illust-maker/src/constants/head-offsets.json');
}

main().catch((e) => { console.error(e); process.exit(1); });
