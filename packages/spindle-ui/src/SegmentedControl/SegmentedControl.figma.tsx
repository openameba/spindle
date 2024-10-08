import React from 'react';
import { SegmentedControl } from './SegmentedControl';
import figma from '@figma/code-connect';

figma.connect(
  SegmentedControl,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4039-12411',
  {
    imports: ["import { SegmentedControl } from '@openameba/spindle-ui';"],
    props: {
      size: figma.enum('Size', {
        Medium: 'medium',
        Large: 'large',
      }),
      number: figma.enum('数', {
        '2': '2',
        '3': '3',
        '4': '4',
      }),
      selected: figma.enum('選択アイテム', {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
      }),
      content: figma.nestedProps('99 Instance / Regular', {
        label: figma.textContent('Label'),
      }),
    },
    example: ({ size, selected }) => (
      <SegmentedControl
        size={size}
        options={[{ id: selected, label: '' }]}
        selectedId={selected}
      />
    ),
  },
);
