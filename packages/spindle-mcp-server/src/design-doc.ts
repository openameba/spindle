import path from 'path';
import fs from 'fs';

export function getComponentDesignDocTemplate() {
  const templatePath = path.join(
    __dirname,
    '../../spindle-ui/.scaffdog/design-doc.md',
  );
  if (!fs.existsSync(templatePath)) {
    return null;
  }

  const content = fs.readFileSync(templatePath, 'utf-8');
  return {
    template: content,
  };
}
