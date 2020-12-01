import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

export const parameters = {
  backgrounds: {
    default: 'Surface Primary',
    values: [
      {
        name: 'Background Color',
        value: '#F5F6F6',
      },
      {
        name: 'Surface Primary',
        value: '#FFFFFF',
      },
      {
        name: 'Surface Secondary',
        value: 'rgba(8,18,26,0.04)',
      },
      {
        name: 'Background Color Dark',
        value: '#08121A'
      }
    ],
  },
};
