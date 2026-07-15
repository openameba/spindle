import figma from '@figma/code-connect';
import React from 'react';
import { CapsuleTab } from './CapsuleTab';

figma.connect(
  CapsuleTab,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4053-27265&t=YLIDc1qkFqK1kafo-4',
  {
    imports: [
      "import { CapsuleTab } from '@openameba/spindle-ui/NavigationTab';",
      "import '@openameba/spindle-ui/NavigationTab/index.css';",
    ],
    variant: { Type: 'Capsule' },
    props: {
      scroll: figma.enum('Scroll', {
        Fixed: 'fixed',
        Scrollable: 'scrollable',
      }),
      number: figma.enum('数', {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      }),
      selected: figma.enum('選択アイテム', {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      }),
      border: figma.boolean('Border'),
    },
    example: ({ scroll, selected, border }) => (
      <CapsuleTab
        variant={scroll}
        options={[{ id: selected, label: '' }]}
        defaultSelectedId={selected}
        hasBorder={border}
      />
    ),
  },
);
