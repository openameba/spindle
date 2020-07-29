import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Button',
};

const eventsFromNames = actions('onClick', 'onMouseOver');

export const large = (): React.ReactNode => (
  <>
    <Button size="large" variant="contained" {...eventsFromNames}>
      Contained
    </Button>
    <Button size="large" variant="outlined" {...eventsFromNames}>
      Outlined
    </Button>
    <Button size="large" variant="neutral" {...eventsFromNames}>
      Neutral
    </Button>
    <Button size="large" variant="danger" {...eventsFromNames}>
      Danger
    </Button>
  </>
);

export const medium = (): React.ReactNode => (
  <>
    <Button size="medium" variant="contained" {...eventsFromNames}>
      Contained
    </Button>
    <Button size="medium" variant="outlined" {...eventsFromNames}>
      Outlined
    </Button>
    <Button size="medium" variant="neutral" {...eventsFromNames}>
      Neutral
    </Button>
    <Button size="medium" variant="danger" {...eventsFromNames}>
      Danger
    </Button>
  </>
);

export const small = (): React.ReactNode => (
  <>
    <Button size="small" variant="contained" {...eventsFromNames}>
      Contained
    </Button>
    <Button size="small" variant="outlined" {...eventsFromNames}>
      Outlined
    </Button>
    <Button size="small" variant="neutral" {...eventsFromNames}>
      Neutral
    </Button>
    <Button size="small" variant="danger" {...eventsFromNames}>
      Danger
    </Button>
  </>
);

export const disabled = (): React.ReactNode => (
  <>
    <Button disabled size="medium" variant="contained" {...eventsFromNames}>
      Contained
    </Button>
    <Button disabled size="medium" variant="contained" {...eventsFromNames}>
      Outlined
    </Button>
    <Button disabled size="medium" variant="neutral" {...eventsFromNames}>
      Neutral
    </Button>
    <Button disabled size="medium" variant="danger" {...eventsFromNames}>
      Danger
    </Button>
  </>
);
