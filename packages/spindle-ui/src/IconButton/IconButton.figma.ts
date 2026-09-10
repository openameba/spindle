// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4042-25426&t=R8kIhRlvP5CmX9Qn-0
// component=IconButton

import figma from 'figma';

const size = figma.selectedInstance.getEnum('Size', {
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
  'Ex Small': 'exSmall',
});
const style = figma.selectedInstance.getEnum('Style', {
  Contained: 'contained',
  Outlined: 'outlined',
  Neutral: 'neutral',
  Lighted: 'lighted',
});
const disabled = figma.selectedInstance.getBoolean('Disabled');
const children = figma.properties.children(['*']);
const label = figma.selectedInstance.getString('Label');

export default {
  id: 'IconButton',
  imports: [
    "import { IconButton } from '@openameba/spindle-ui';",
    "import '@openameba/spindle-ui/IconButton/IconButton.css';",
  ],
  example: figma.code`<IconButton${figma.helpers.react.renderProp(
    'size',
    size,
  )}${figma.helpers.react.renderProp(
    'variant',
    style,
  )}${figma.helpers.react.renderProp(
    'disabled',
    disabled,
  )}${figma.helpers.react.renderProp('aria-label', label)}>
        ${figma.helpers.react.renderChildren(children)}
      </IconButton>`,
  metadata: { nestable: true },
};
