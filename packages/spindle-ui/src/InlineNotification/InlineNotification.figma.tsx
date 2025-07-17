import React from 'react';
import { InlineNotification } from './InlineNotification';
import figma from '@figma/code-connect';
import CrossBold from 'src/Icon/CrossBold';
import Information from 'src/Icon/Information';

figma.connect(
  InlineNotification,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4094-14110',
  {
    imports: [
      "import { InlineNotification } from '@openameba/spindle-ui';",
      "import '@openameba/spindle-ui/InlineNotification/InlineNotification.css';",
    ],
    props: {
      variant: figma.enum('variant', {
        Information: 'information',
        Confirmation: 'confirmation',
        Error: 'error',
      }),
      layout: figma.enum('layout', {
        full: 'full',
        inset: 'inset',
      }),
      emphasis: figma.boolean('emphasis'),
      label: figma.textContent('label'),
      leftIcon: figma.enum('Left Icon', {
        Icon: <Information aria-hidden="true" />,
        Thumbnail: <InlineNotification.Avatar src="" alt="" />,
      }),
      closeButton: figma.enum('Close Button', {
        '-': undefined,
        Icon: (
          <InlineNotification.IconButton>
            <CrossBold aria-label="とじる" />
          </InlineNotification.IconButton>
        ),
        'Label Button': (
          <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
        ),
        Button: <InlineNotification.Button>{''}</InlineNotification.Button>,
      }),
    },
    example: ({ variant, layout, emphasis, label, leftIcon, closeButton }) => (
      <InlineNotification.Frame
        variant={variant}
        layout={layout}
        emphasis={emphasis}
      >
        <>
          {leftIcon}
          <InlineNotification.Text>{label}</InlineNotification.Text>
          {closeButton}
        </>
      </InlineNotification.Frame>
    ),
  },
);
