import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run Vite build programmatically
build({
  root: __dirname,
  build: {
    outDir: 'dist'
  }
}).then(() => {
  console.log('Build completed successfully!');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
