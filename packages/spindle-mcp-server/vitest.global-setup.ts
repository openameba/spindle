import { execSync } from 'node:child_process';

export async function setup() {
  console.log('Building spindle-mcp-server...');

  try {
    execSync('yarn build', {
      cwd: __dirname,
      stdio: 'inherit',
    });
  } catch (_error) {
    console.warn('Build failed, but continuing with tests');
  }
}
