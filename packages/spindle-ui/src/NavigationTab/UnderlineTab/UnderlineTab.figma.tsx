import React from 'react';
import { UnderlineTab } from './UnderlineTab';
import figma from '@figma/code-connect';

figma.connect(
  UnderlineTab,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4053-27265&t=YLIDc1qkFqK1kafo-4',
  {
    imports: ["import { UnderlineTab } from '@openameba/spindle-ui';"],
    variant: { Type: 'Under Bar' },
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
      content: figma.nestedProps('Navigation Tab Item / Under Bar', {
        text: figma.textContent('Text'),
      }),
    },
    example: ({ scroll, selected, border }) => (
      <UnderlineTab
        variant={scroll}
        options={[{ id: selected, label: '' }]}
        defaultSelectedId={selected}
        hasBorder={border}
      />
    ),
  },
);
