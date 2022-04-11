import { createConfig } from '../config';
import { loadFiles } from '../loadFiles';
import { run } from '../run';
import { defaultStages } from '../stage';


async function main() {

  const envFiles = await loadFiles();

  const config = createConfig({
    name: 'NiceComponent',
    'styling': 'scss',
    overwrite: true
  }, envFiles);

  console.log(config);

  const stages = defaultStages(config);

  await run({
    envFiles,
    config,
    stages
  });
}

main().catch(console.error);


