import React from 'react';
import { Radio } from './Radio';

export default {
  title: 'Form',
};

export const RadioInput = (): React.ReactNode => (
  <p>
    <Radio id="asia" name="continent">
      Asia
    </Radio>
    <Radio id="africa" name="continent">
      Africa
    </Radio>
    <Radio id="america" name="continent">
      America
    </Radio>
    <Radio id="europe" name="continent">
      Europe
    </Radio>
  </p>
);
