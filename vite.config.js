import { defineConfig } from 'vite';
import { sites } from '@openai/sites-vite-plugin';
import { mkdir, writeFile } from 'node:fs/promises';

function staticWorker() {
  return {
    name: 'static-worker',
    apply: 'build',
    async closeBundle() {
      await mkdir('dist/server', { recursive: true });
      await writeFile('dist/server/index.js', `export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n`);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [sites(), staticWorker()],
});
