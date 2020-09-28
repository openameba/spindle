import React from 'react';
import { InputLabel } from './InputLabel';
import { TextField } from './TextField';
import { InvalidMessage } from './InvalidMessage';

export default {
  title: 'Form',
};

export const Error = (): React.ReactNode => (
  <p>
    <InputLabel id="with-error">Mail Address</InputLabel>
    <TextField
      hasError
      id="with-error"
      placeholder="ameba-taro@example.com"
      type="email"
    ></TextField>
    <InvalidMessage visible>Please input mail address</InvalidMessage>
    <InvalidMessage visible>The address is invalid</InvalidMessage>
    <InvalidMessage>The address already registered</InvalidMessage>
  </p>
);
