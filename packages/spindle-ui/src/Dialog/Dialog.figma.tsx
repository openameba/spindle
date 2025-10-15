import figma from '@figma/code-connect';
import React from 'react';
import { Button } from 'src/Button';
import { SubtleButton } from 'src/SubtleButton';
import { Dialog } from './Dialog';

figma.connect(
  Dialog,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=452-38043',
  {
    imports: [
      "import { Dialog } from '@openameba/spindle-ui';",
      "import '@openameba/spindle-ui/Dialog/Dialog.css';",
    ],
    props: {
      title: figma.boolean('Title', {
        true: <Dialog.Title></Dialog.Title>,
        false: undefined,
      }),
      description: figma.boolean('Description', {
        true: <Dialog.Body></Dialog.Body>,
        false: undefined,
      }),
      closeButton: figma.boolean('Close Button', {
        true: <SubtleButton size="medium">とじる</SubtleButton>,
        false: undefined,
      }),
      content: figma.nestedProps('Button Layout', {
        layout: figma.enum('Layout', {
          Vertical: 'column',
          Horizontal: 'row',
        }),
        secondaryButton: figma.boolean('Secondary Button2', {
          true: <Button layout="fullWidth" size="medium"></Button>,
          false: undefined,
        }),
      }),
    },
    example: ({ title, description, closeButton, content }) => (
      <Dialog.Frame>
        {title}
        {description}
        <Dialog.ButtonGroup direction={content.layout}>
          <Button layout="fullWidth" size="medium" autoFocus></Button>
          {content.secondaryButton}
          {closeButton}
        </Dialog.ButtonGroup>
      </Dialog.Frame>
    ),
  },
);
