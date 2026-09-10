// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33051&t=BiQUBKKifVQV5TbP-0
// component=Radio

import figma from 'figma';

const active = figma.selectedInstance.getBoolean('Active');
const label = figma.selectedInstance.getString('Label');
const name = figma.selectedInstance.getString('Name');
const id = figma.selectedInstance.getString('id');

export default {
  id: 'Radio',
  imports: [
    "import { Radio } from '@openameba/spindle-ui/Form';",
    "import '@openameba/spindle-ui/Form/Radio.css';",
  ],
  example: figma.code`<Radio${figma.helpers.react.renderProp(
    'id',
    id,
  )}${figma.helpers.react.renderProp(
    'name',
    name,
  )}${figma.helpers.react.renderProp(
    'aria-label',
    label,
  )}${figma.helpers.react.renderProp('checked', active)}></Radio>`,
  metadata: { nestable: true },
};
