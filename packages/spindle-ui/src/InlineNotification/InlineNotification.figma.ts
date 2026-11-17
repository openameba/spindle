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
const label = figma.selectedInstance.getString('label');
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

const imports = [
  "import { InlineNotification } from '@openameba/spindle-ui';",
  "import '@openameba/spindle-ui/InlineNotification/InlineNotification.css';",
];

// Lines=2 のときだけ Text の中を Title と Description にする。1行がフォールバックを兼ねるため else に置いている。
let template;
if (figma.selectedInstance.getPropertyValue('Lines') === '2') {
  const description = figma.selectedInstance.getString('description');
  template = {
    id: 'InlineNotification',
    imports,
    example: figma.code`<InlineNotification.Frame${figma.helpers.react.renderProp(
      'variant',
      variant,
    )}${figma.helpers.react.renderProp(
      'layout',
      layout,
    )}${figma.helpers.react.renderProp('emphasis', emphasis)}>
        ${figma.helpers.react.renderChildren(leftIcon)}
        <InlineNotification.Text>
          <InlineNotification.Title>${label}</InlineNotification.Title>
          <InlineNotification.Description>${description}</InlineNotification.Description>
        </InlineNotification.Text>
        ${figma.helpers.react.renderChildren(closeButton)}
      </InlineNotification.Frame>`,
    metadata: { nestable: true },
  };
} else {
  template = {
    id: 'InlineNotification',
    imports,
    example: figma.code`<InlineNotification.Frame${figma.helpers.react.renderProp(
      'variant',
      variant,
    )}${figma.helpers.react.renderProp(
      'layout',
      layout,
    )}${figma.helpers.react.renderProp('emphasis', emphasis)}>
        ${figma.helpers.react.renderChildren(leftIcon)}
        <InlineNotification.Text>${label}</InlineNotification.Text>
        ${figma.helpers.react.renderChildren(closeButton)}
      </InlineNotification.Frame>`,
    metadata: { nestable: true },
  };
}

export default template;
