import React from 'react';
import { Radio } from './Radio';
import figma from '@figma/code-connect';

figma.connect(
  Radio,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33051&t=BiQUBKKifVQV5TbP-0',
  {
    imports: [
      "import { Radio } from '@openameba/spindle-ui/Form';",
      "import '@openameba/spindle-ui/Form/Radio.css';",
    ],
    props: {
      active: figma.boolean('Active'),
      hover: figma.boolean('Focus Ring'),
      label: figma.string('Label'),
      name: figma.string('Name'),
      id: figma.string('id'),
    },
    example: ({ active, label, name, id }) => (
      <Radio id={id} name={name} aria-label={label} checked={active}></Radio>
    ),
  },
);
