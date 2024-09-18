import React from 'react';
import { IconButton } from './IconButton';
import figma from '@figma/code-connect';

figma.connect(
  IconButton,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=4042-25426&t=R8kIhRlvP5CmX9Qn-0',
  {
    imports: ["import { IconButton } from '@openameba/spindle-ui';"],
    props: {
      size: figma.enum('Size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
        'Ex Small': 'exSmall',
      }),
      style: figma.enum('Style', {
        Contained: 'contained',
        Outlined: 'outlined',
        Neutral: 'neutral',
        Lighted: 'lighted',
      }),
      disabled: figma.boolean('Disabled'),
      children: figma.children('*'),
      label: figma.string('Label'),
    },
    example: ({ size, style, disabled, children, label }) => (
      <IconButton
        size={size}
        variant={style}
        disabled={disabled}
        aria-label={label}
      >
        {children}
      </IconButton>
    ),
  },
);
