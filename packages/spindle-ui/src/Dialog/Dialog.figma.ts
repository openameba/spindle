// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=452-38043
// component=Dialog

import figma from 'figma';

const title = figma.selectedInstance.getBoolean('Title', {
  true: figma.helpers.react.jsxElement('<Dialog.Title></Dialog.Title>'),
  false: undefined,
});
const description = figma.selectedInstance.getBoolean('Description', {
  true: figma.helpers.react.jsxElement('<Dialog.Body></Dialog.Body>'),
  false: undefined,
});
const closeButton = figma.selectedInstance.getBoolean('Close Button', {
  true: figma.helpers.react.jsxElement(
    '<SubtleButton size="medium">とじる</SubtleButton>',
  ),
  false: undefined,
});
const content = (function () {
  const nestedLayer2 = figma.selectedInstance.findInstance('Button Layout');
  return {
    layout:
      nestedLayer2.type !== 'ERROR'
        ? nestedLayer2.getEnum('Layout', {
            Vertical: 'column',
            Horizontal: 'row',
          })
        : undefined,
    secondaryButton:
      nestedLayer2.type !== 'ERROR'
        ? nestedLayer2.getBoolean('Secondary Button2', {
            true: figma.helpers.react.jsxElement(
              '<Button layout="fullWidth" size="medium"></Button>',
            ),
            false: undefined,
          })
        : undefined,
  };
})();

export default {
  id: 'Dialog',
  imports: [
    "import { Dialog } from '@openameba/spindle-ui';",
    "import '@openameba/spindle-ui/Dialog/Dialog.css';",
  ],
  example: figma.code`<Dialog.Frame>
        ${figma.helpers.react.renderChildren(title)}
        ${figma.helpers.react.renderChildren(description)}
        <Dialog.ButtonGroup${figma.helpers.react.renderProp(
          'direction',
          content.layout,
        )}>
          <Button layout="fullWidth" size="medium" autoFocus></Button>
          ${figma.helpers.react.renderChildren(content.secondaryButton)}
          ${figma.helpers.react.renderChildren(closeButton)}
        </Dialog.ButtonGroup>
      </Dialog.Frame>`,
  metadata: { nestable: true },
};
