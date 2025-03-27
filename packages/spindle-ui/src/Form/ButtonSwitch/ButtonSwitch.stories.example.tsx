import React, { useState } from 'react';
import { ButtonSwitch } from './ButtonSwitch';

export const ButtonSwitchExample = ({ options, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="preview">
      <ButtonSwitch
        id="unique-id"
        options={options}
        value={value}
        onClick={(newValue) => {
          setValue(value === newValue ? null : newValue);
        }}
      />
    </div>
  );
};
