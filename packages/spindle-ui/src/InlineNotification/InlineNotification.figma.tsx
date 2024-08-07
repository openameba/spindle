import React from 'react';
import { InlineNotification } from './InlineNotification';
import figma from '@figma/code-connect';
import { CrossBold, Information } from 'src/Icon';

figma.connect(
  InlineNotification,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4094-14110',
  {
    imports: ["import { InlineNotification } from '@openameba/spindle-ui';"],
    props: {
      type: figma.enum('Type', {
        Information: 'information',
        Confirmation: 'confirmation',
        Error: 'error',
      }),
      layout: figma.enum('Shape', {
        full: 'full',
        inset: 'inset',
      }),
      emphasis: figma.boolean('Emphasized'),
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
    example: ({ type, layout, emphasis, label, leftIcon, closeButton }) => (
      <InlineNotification.Frame
        variant={type}
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
