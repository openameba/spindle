// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4039-12411
// component=SegmentedControl

import figma from 'figma';

const size = figma.selectedInstance.getEnum('Size', {
  Medium: 'medium',
  Large: 'large',
});
const selected = figma.selectedInstance.getEnum('選択アイテム', {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
});
export default {
  id: 'SegmentedControl',
  imports: [
    "import { SegmentedControl } from '@openameba/spindle-ui';",
    "import '@openameba/spindle-ui/SegmentedControl/SegmentedControl.css';",
  ],
  example: figma.code`<SegmentedControl${figma.helpers.react.renderProp(
    'size',
    size,
  )} options={[{ id: ${figma.helpers.react.renderPropValue(
    selected,
  )}, label: '' }]}${figma.helpers.react.renderProp('selectedId', selected)}/>`,
  metadata: { nestable: true },
};
