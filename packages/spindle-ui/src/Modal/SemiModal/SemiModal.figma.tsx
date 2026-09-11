import figma from '@figma/code-connect';
import React from 'react';
import { Button } from 'src/Button';
import { SemiModal } from './SemiModal';

// PC向け（popup）
figma.connect(
  SemiModal,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=454-39096',
  {
    imports: [
      "import { SemiModal } from '@openameba/spindle-ui';",
      "import '@openameba/spindle-ui/Modal/SemiModal/SemiModal.css';",
    ],
    props: {
      size: figma.enum('size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      title: figma.boolean('Title', {
        true: (
          <SemiModal.Header>
            <SemiModal.HeaderTitle></SemiModal.HeaderTitle>
          </SemiModal.Header>
        ),
        false: undefined,
      }),
      contents: figma.boolean('Contents', {
        true: <SemiModal.Contents></SemiModal.Contents>,
        false: undefined,
      }),
      footer: figma.boolean('Footer', {
        true: (
          <SemiModal.Footer>
            <Button layout="fullWidth" size="medium"></Button>
          </SemiModal.Footer>
        ),
        false: undefined,
      }),
    },
    example: ({ size, title, contents, footer }) => (
      <SemiModal.Frame type="popup" size={size}>
        {title}
        {contents}
        {footer}
      </SemiModal.Frame>
    ),
  },
);

// SP向け（sheet）
figma.connect(
  SemiModal,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=457-38844',
  {
    imports: [
      "import { SemiModal } from '@openameba/spindle-ui';",
      "import '@openameba/spindle-ui/Modal/SemiModal/SemiModal.css';",
    ],
    props: {
      size: figma.enum('size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      title: figma.boolean('Title', {
        true: (
          <SemiModal.Header>
            <SemiModal.HeaderTitle></SemiModal.HeaderTitle>
          </SemiModal.Header>
        ),
        false: undefined,
      }),
      contents: figma.boolean('Contents', {
        true: <SemiModal.Contents></SemiModal.Contents>,
        false: undefined,
      }),
      footer: figma.boolean('Footer', {
        true: (
          <SemiModal.Footer>
            <Button layout="fullWidth" size="medium"></Button>
          </SemiModal.Footer>
        ),
        false: undefined,
      }),
    },
    example: ({ size, title, contents, footer }) => (
      <SemiModal.Frame type="sheet" size={size}>
        {title}
        {contents}
        {footer}
      </SemiModal.Frame>
    ),
  },
);
