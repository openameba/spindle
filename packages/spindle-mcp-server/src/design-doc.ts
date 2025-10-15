import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getComponentDesignDocTemplate() {
  const templatePath = path.join(
    __dirname,
    '../assets/spindle-ui/.scaffdog/design-doc.md',
  );
  if (!fs.existsSync(templatePath)) {
    return null;
  }

  const content = fs.readFileSync(templatePath, 'utf-8');
  return {
    template: content,
  };
}
