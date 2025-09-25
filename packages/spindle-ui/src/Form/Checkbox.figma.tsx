import figma from '@figma/code-connect';
import React from 'react';
import { Checkbox } from './Checkbox';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33059&t=BiQUBKKifVQV5TbP-0',
  {
    imports: [
      "import { Checkbox } from '@openameba/spindle-ui/Form';",
      "import '@openameba/spindle-ui/Form/Checkbox.css';",
    ],
    props: {
      active: figma.boolean('Active'),
      hover: figma.boolean('Focus Ring'),
      label: figma.string('Label'),
      name: figma.string('Name'),
      id: figma.string('id'),
      value: figma.string('value'),
    },
    example: ({ active, label, name, id, value }) => (
      <Checkbox
        id={id}
        name={name}
        value={value}
        aria-label={label}
        checked={active}
      ></Checkbox>
    ),
  },
);
