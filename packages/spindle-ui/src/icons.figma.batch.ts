import figma from 'figma';

export default {
  id: figma.batch.id,
  imports: [
    `import { ${figma.batch.componentName} } from '@openameba/spindle-ui/Icon';`,
  ],
  example: figma.code`<${figma.batch.componentName} />`,
};
