import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import figma from '@figma/code-connect';

figma.connect(
  ToggleSwitch,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33067&t=BiQUBKKifVQV5TbP-0',
  {
    imports: ["import { ToggleSwitch } from '@openameba/spindle-ui/Form';"],
    props: {
      active: figma.boolean('Active'),
    },
    example: () => <ToggleSwitch id="" aria-label=""></ToggleSwitch>,
  },
);
