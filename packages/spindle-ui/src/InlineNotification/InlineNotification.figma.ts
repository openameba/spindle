// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4094-14110
// component=InlineNotification

import figma from 'figma';

const variant = figma.selectedInstance.getEnum('variant', {
  Information: 'information',
  Confirmation: 'confirmation',
  Error: 'error',
});
const layout = figma.selectedInstance.getEnum('layout', {
  full: 'full',
  inset: 'inset',
});
const emphasis = figma.selectedInstance.getBoolean('emphasis');
const label = figma.selectedInstance.findText('label').__render__();
const leftIcon = figma.selectedInstance.getEnum('Left Icon', {
  Icon: figma.helpers.react.jsxElement('<Information aria-hidden="true" />'),
  Thumbnail: figma.helpers.react.jsxElement(
    '<InlineNotification.Avatar src="" alt="" />',
  ),
});
const closeButton = figma.selectedInstance.getEnum('Close Button', {
  '-': undefined,
  Icon: figma.helpers.react.jsxElement(
    '<InlineNotification.IconButton>\n            <CrossBold aria-label="とじる" />\n          </InlineNotification.IconButton>',
  ),
  'Label Button': figma.helpers.react.jsxElement(
    '<InlineNotification.TextButton>とじる</InlineNotification.TextButton>',
  ),
  Button: figma.helpers.react.jsxElement(
    "<InlineNotification.Button>{''}</InlineNotification.Button>",
  ),
});

export default {
  id: 'InlineNotification',
  imports: [
    "import { InlineNotification } from '@openameba/spindle-ui';",
    "import '@openameba/spindle-ui/InlineNotification/InlineNotification.css';",
  ],
  example: figma.code`<InlineNotification.Frame${figma.helpers.react.renderProp(
    'variant',
    variant,
  )}${figma.helpers.react.renderProp(
    'layout',
    layout,
  )}${figma.helpers.react.renderProp('emphasis', emphasis)}>
        ${figma.helpers.react.renderChildren(leftIcon)}
        <InlineNotification.Text>${figma.helpers.react.renderChildren(
          label,
        )}</InlineNotification.Text>
        ${figma.helpers.react.renderChildren(closeButton)}
      </InlineNotification.Frame>`,
  metadata: { nestable: true },
};
