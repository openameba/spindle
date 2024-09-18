import React from 'react';
import { SnackBar } from './SnackBar';
import figma from '@figma/code-connect';
import {
  CheckCircleFill,
  ExclamationmarkCircleFill,
  Information,
} from 'src/Icon';

figma.connect(
  SnackBar,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=2140-5205&t=4TOAABS2nOFPTFbt-0',
  {
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { Information } from '@openameba/spindle-ui/Icon';",
    ],
    variant: { variant: 'Information' },
    props: {
      variant: figma.enum('variant', {
        Information: 'information',
        Confirmation: 'confirmation',
        Error: 'error',
      }),
      rightItem: figma.enum('Right Item', {
        Icon: undefined,
        'Text + Icon': <SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>,
      }),
      label: figma.textContent('label'),
    },
    example: ({ variant, rightItem, label }) => (
      <SnackBar.Frame variant={variant}>
        <>
          <SnackBar.Icon>
            <Information aria-label="インフォメーション" />
          </SnackBar.Icon>
          <SnackBar.Text>{label}</SnackBar.Text>
          {rightItem}
        </>
      </SnackBar.Frame>
    ),
  },
);

figma.connect(
  SnackBar,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=2140-5205&t=4TOAABS2nOFPTFbt-0',
  {
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { CheckCircleFill } from '@openameba/spindle-ui/Icon';",
    ],
    variant: { variant: 'Confirmation' },
    props: {
      variant: figma.enum('variant', {
        Information: 'information',
        Confirmation: 'confirmation',
        Error: 'error',
      }),
      rightItem: figma.enum('Right Item', {
        Icon: undefined,
        'Text + Icon': <SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>,
      }),
      label: figma.textContent('label'),
    },
    example: ({ variant, rightItem, label }) => (
      <SnackBar.Frame variant={variant}>
        <>
          <SnackBar.Icon>
            <CheckCircleFill aria-label="確認" />
          </SnackBar.Icon>
          <SnackBar.Text>{label}</SnackBar.Text>
          {rightItem}
        </>
      </SnackBar.Frame>
    ),
  },
);

figma.connect(
  SnackBar,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=2140-5205&t=4TOAABS2nOFPTFbt-0',
  {
    imports: [
      "import { SnackBar } from '@openameba/spindle-ui'; import { ExclamationmarkCircleFill } from '@openameba/spindle-ui/Icon';",
    ],
    variant: { variant: 'Error' },
    props: {
      variant: figma.enum('variant', {
        Information: 'information',
        Confirmation: 'confirmation',
        Error: 'error',
      }),
      rightItem: figma.enum('Right Item', {
        Icon: undefined,
        'Text + Icon': <SnackBar.TextButton>{'TEXT'}</SnackBar.TextButton>,
      }),
      label: figma.textContent('label'),
    },
    example: ({ variant, rightItem, label }) => (
      <SnackBar.Frame variant={variant}>
        <>
          <SnackBar.Icon>
            <ExclamationmarkCircleFill aria-label="注意" />
          </SnackBar.Icon>
          <SnackBar.Text>{label}</SnackBar.Text>
          {rightItem}
        </>
      </SnackBar.Frame>
    ),
  },
);
