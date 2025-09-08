import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import figma from '@figma/code-connect';

figma.connect(
  ToggleSwitch,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33067&t=BiQUBKKifVQV5TbP-0',
  {
    imports: [
      "import { ToggleSwitch } from '@openameba/spindle-ui/Form';",
      "import '@openameba/spindle-ui/Form/ToggleSwitch.css';",
    ],
    props: {
      active: figma.boolean('Active'),
      id: figma.string('id'),
      label: figma.string('label'),
    },
    example: ({ active, id, label }) => (
      <ToggleSwitch id={id} aria-label={label} checked={active}></ToggleSwitch>
    ),
  },
);
