// url=https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=2140-5205&t=4TOAABS2nOFPTFbt-0
// component=SnackBar

import figma from 'figma';

// Branch per variant。Information は variant が解決できなかった場合の
// フォールバックも兼ねるため else に置いている。

let template;
if (figma.selectedInstance.getPropertyValue('variant') === 'Confirmation') {
  const variant = figma.selectedInstance.getEnum('variant', {
    Information: 'information',
    Confirmation: 'confirmation',
    Error: 'error',
  });
  const rightItem = figma.selectedInstance.getEnum('Right Item', {
    Icon: undefined,
    'Text + Icon': figma.helpers.react.jsxElement(
      "<SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>",
    ),
  });
  const label = figma.selectedInstance.findText('label').__render__();

  template = {
    id: 'SnackBar',
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { CheckCircleFill } from '@openameba/spindle-ui/Icon';",
      "import '@openameba/spindle-ui/SnackBar/SnackBar.css';",
    ],
    example: figma.code`<SnackBar.Frame${figma.helpers.react.renderProp(
      'variant',
      variant,
    )}>
        <SnackBar.Icon>
          <CheckCircleFill aria-label="確認"/>
        </SnackBar.Icon>
        <SnackBar.Text>${figma.helpers.react.renderChildren(
          label,
        )}</SnackBar.Text>
        ${figma.helpers.react.renderChildren(rightItem)}
      </SnackBar.Frame>`,
    metadata: { nestable: true },
  };
} else if (figma.selectedInstance.getPropertyValue('variant') === 'Error') {
  const variant = figma.selectedInstance.getEnum('variant', {
    Information: 'information',
    Confirmation: 'confirmation',
    Error: 'error',
  });
  const rightItem = figma.selectedInstance.getEnum('Right Item', {
    Icon: undefined,
    'Text + Icon': figma.helpers.react.jsxElement(
      "<SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>",
    ),
  });
  const label = figma.selectedInstance.findText('label').__render__();

  template = {
    id: 'SnackBar',
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { ExclamationmarkCircleFill } from '@openameba/spindle-ui/Icon';",
      "import '@openameba/spindle-ui/SnackBar/SnackBar.css';",
    ],
    example: figma.code`<SnackBar.Frame${figma.helpers.react.renderProp(
      'variant',
      variant,
    )}>
        <SnackBar.Icon>
          <ExclamationmarkCircleFill aria-label="注意"/>
        </SnackBar.Icon>
        <SnackBar.Text>${figma.helpers.react.renderChildren(
          label,
        )}</SnackBar.Text>
        ${figma.helpers.react.renderChildren(rightItem)}
      </SnackBar.Frame>`,
    metadata: { nestable: true },
  };
} else {
  const variant = figma.selectedInstance.getEnum('variant', {
    Information: 'information',
    Confirmation: 'confirmation',
    Error: 'error',
  });
  const rightItem = figma.selectedInstance.getEnum('Right Item', {
    Icon: undefined,
    'Text + Icon': figma.helpers.react.jsxElement(
      "<SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>",
    ),
  });
  const label = figma.selectedInstance.findText('label').__render__();

  template = {
    id: 'SnackBar',
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { Information } from '@openameba/spindle-ui/Icon';",
      "import '@openameba/spindle-ui/SnackBar/SnackBar.css';",
    ],
    example: figma.code`<SnackBar.Frame${figma.helpers.react.renderProp(
      'variant',
      variant,
    )}>
        <SnackBar.Icon>
          <Information aria-label="インフォメーション"/>
        </SnackBar.Icon>
        <SnackBar.Text>${figma.helpers.react.renderChildren(
          label,
        )}</SnackBar.Text>
        ${figma.helpers.react.renderChildren(rightItem)}
      </SnackBar.Frame>`,
    metadata: { nestable: true },
  };
}

export default template;
