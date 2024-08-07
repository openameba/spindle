import React from 'react';
import { Button } from './Button';
import figma from '@figma/code-connect';

figma.connect(
  Button,
  'https://www.figma.com/design/FSgvRthUiMMXWgrSE4RUgr/Spindle-UI?node-id=1789-29120&t=5pAze6eM9wAFTPFz-0',
  {
    imports: ["import { Button } from '@openameba/spindle-ui';"],
    props: {
      size: figma.enum('size', {
        large: 'large',
        medium: 'medium',
        small: 'small',
      }),
      variant: figma.enum('variant', {
        contained: 'contained',
        outlined: 'outlined',
        neutral: 'neutral',
        lighted: 'lighted',
        danger: 'danger',
      }),
      layout: figma.enum('layout', {
        intrinsic: 'intrinsic',
        fullWidth: 'fullWidth',
      }),
      disabled: figma.boolean('disabled'),
      content: figma.nestedProps('Instance / Content', {
        iconPosition: figma.enum('iconPosition', {
          start: 'start',
          end: 'end',
        }),
        icon: figma.boolean('icon', {
          true: figma.instance('└ iconName'),
          false: undefined,
        }),
        label: figma.textContent('btn_txt'),
      }),
    },
    example: ({ size, variant, layout, disabled, content }) => (
      <Button
        size={size}
        variant={variant}
        layout={layout}
        disabled={disabled}
        icon={content.icon}
        iconPosition={content.iconPosition}
      >
        {content.label}
      </Button>
    ),
  },
);
