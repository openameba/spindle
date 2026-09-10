// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33067&t=BiQUBKKifVQV5TbP-0
// component=ToggleSwitch

import figma from 'figma';

const active = figma.selectedInstance.getBoolean('Active');
const id = figma.selectedInstance.getString('id');
const label = figma.selectedInstance.getString('label');

export default {
  id: 'ToggleSwitch',
  imports: [
    "import { ToggleSwitch } from '@openameba/spindle-ui/Form';",
    "import '@openameba/spindle-ui/Form/ToggleSwitch.css';",
  ],
  example: figma.code`<ToggleSwitch${figma.helpers.react.renderProp(
    'id',
    id,
  )}${figma.helpers.react.renderProp(
    'aria-label',
    label,
  )}${figma.helpers.react.renderProp('checked', active)}></ToggleSwitch>`,
  metadata: { nestable: true },
};
