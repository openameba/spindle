import React from 'react';
import { Checkbox } from './Checkbox';
import figma from '@figma/code-connect';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=473-33059&t=BiQUBKKifVQV5TbP-0',
  {
    imports: ["import { Checkbox } from '@openameba/spindle-ui/Form';"],
    props: {
      active: figma.boolean('Active'),
    },
    example: () => <Checkbox id="" name="" value="" aria-label=""></Checkbox>,
  },
);
