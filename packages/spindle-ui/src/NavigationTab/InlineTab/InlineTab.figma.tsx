import figma from '@figma/code-connect';
import React from 'react';
import { InlineTab } from './InlineTab';

figma.connect(
  InlineTab,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4053-27265&t=YLIDc1qkFqK1kafo-4',
  {
    imports: [
      "import { InlineTab } from '@openameba/spindle-ui/NavigationTab';",
      "import '@openameba/spindle-ui/NavigationTab/index.css';",
    ],
    variant: { Type: 'Inline Capsule' },
    props: {
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
    },
    example: ({ selected }) => (
      <InlineTab
        options={[{ id: selected, label: '' }]}
        defaultSelectedId={selected}
      />
    ),
  },
);
