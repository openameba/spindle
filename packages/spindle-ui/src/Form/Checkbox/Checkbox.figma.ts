// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33059&t=BiQUBKKifVQV5TbP-0
// component=Checkbox

import figma from 'figma';

const active = figma.selectedInstance.getBoolean('Active');
const inverse = figma.selectedInstance.getBoolean('Inverse');
const label = figma.selectedInstance.getString('Label');
const name = figma.selectedInstance.getString('Name');
const id = figma.selectedInstance.getString('id');
const value = figma.selectedInstance.getString('value');

export default {
  id: 'Checkbox',
  imports: [
    "import { Checkbox } from '@openameba/spindle-ui/Form';",
    "import '@openameba/spindle-ui/Form/Checkbox.css';",
  ],
  example: figma.code`<Checkbox${figma.helpers.react.renderProp(
    'id',
    id,
  )}${figma.helpers.react.renderProp(
    'name',
    name,
  )}${figma.helpers.react.renderProp(
    'value',
    value,
  )}${figma.helpers.react.renderProp(
    'aria-label',
    label,
  )}${figma.helpers.react.renderProp(
    'checked',
    active,
  )}${figma.helpers.react.renderProp('inverse', inverse)}></Checkbox>`,
  metadata: { nestable: true },
};
