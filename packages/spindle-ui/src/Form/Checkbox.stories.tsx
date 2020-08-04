import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Form',
};

export const CheckboxInput = (): React.ReactNode => (
  <p>
    <Checkbox id="checkbox" name="checkbox">
      Check
    </Checkbox>
  </p>
);
