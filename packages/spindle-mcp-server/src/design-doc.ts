import fs from 'node:fs';
import path from 'node:path';

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
