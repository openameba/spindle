// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=1789-29120&t=5pAze6eM9wAFTPFz-0
// component=Button

import figma from 'figma';

const size = figma.selectedInstance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
});
const variant = figma.selectedInstance.getEnum('variant', {
  contained: 'contained',
  outlined: 'outlined',
  neutral: 'neutral',
  lighted: 'lighted',
  danger: 'danger',
});
const layout = figma.selectedInstance.getEnum('layout', {
  intrinsic: 'intrinsic',
  fullWidth: 'fullWidth',
});
const disabled = figma.selectedInstance.getBoolean('disabled');
const content = (function () {
  const nestedLayer3 =
    figma.selectedInstance.findInstance('Instance / Content');
  return {
    iconPosition:
      nestedLayer3.type !== 'ERROR'
        ? nestedLayer3.getEnum('iconPosition', {
            start: 'start',
            end: 'end',
          })
        : undefined,
    icon:
      nestedLayer3.type !== 'ERROR'
        ? nestedLayer3.getBoolean('icon', {
            true: nestedLayer3.getInstanceSwap('└ iconName')?.executeTemplate()
              .example,
            false: undefined,
          })
        : undefined,
    label:
      nestedLayer3.type !== 'ERROR'
        ? nestedLayer3.findText('btn_txt').__render__()
        : undefined,
  };
})();

export default {
  id: 'Button',
  imports: [
    "import { Button } from '@openameba/spindle-ui';",
    "import '@openameba/spindle-ui/Button/Button.css';",
  ],
  example: figma.code`<Button${figma.helpers.react.renderProp(
    'size',
    size,
  )}${figma.helpers.react.renderProp(
    'variant',
    variant,
  )}${figma.helpers.react.renderProp(
    'layout',
    layout,
  )}${figma.helpers.react.renderProp(
    'disabled',
    disabled,
  )}${figma.helpers.react.renderProp(
    'icon',
    content.icon,
  )}${figma.helpers.react.renderProp('iconPosition', content.iconPosition)}>
        ${figma.helpers.react.renderChildren(content.label)}
      </Button>`,
  metadata: { nestable: true },
};
