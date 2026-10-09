import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const manifest = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
const destination = path.resolve('public/assets/tools');
await fs.mkdir(destination, { recursive: true });
for (const asset of manifest) {
  if (!/^[a-z-]+$/.test(asset.id)) throw new Error('Invalid asset name');
  await sharp(asset.path).resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true }).webp({ quality: 86 }).toFile(path.join(destination, `${asset.id}.webp`));
}
console.log(`Prepared ${manifest.length} individual WebP catalog images.`);
