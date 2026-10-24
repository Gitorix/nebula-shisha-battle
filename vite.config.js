import { defineConfig } from 'vite';
import { copyFile } from 'node:fs/promises';

function copyClassicScript() {
  return {
    name: 'copy-classic-script',
    apply: 'build',
    async closeBundle() {
      await copyFile('app.js', 'dist/app.js');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [copyClassicScript()],
});
