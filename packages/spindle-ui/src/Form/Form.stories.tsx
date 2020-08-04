import React from 'react';
import { InputLabel } from './InputLabel';
import { TextField } from './TextField';
import { InvalidMessage } from './InvalidMessage';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';

export default {
  title: 'Form',
};

export const AllParts = (): React.ReactNode => (
  <>
    <p>
      <InputLabel id="email">Mail Address</InputLabel>
      <TextField
        id="email"
        placeholder="ameba-taro@example.com"
        type="email"
      ></TextField>
    </p>
    <p>
      <Radio id="business" name="mail-category">
        Business
      </Radio>
      <Radio id="home" name="mail-category">
        Home
      </Radio>
    </p>
    <p>
      <Checkbox id="noti-email" name="email">
        Notify updates via E-Mail
      </Checkbox>
    </p>
  </>
);

export const Error = (): React.ReactNode => (
  <p>
    <InputLabel id="with-error">メールアドレス</InputLabel>
    <TextField
      hasError
      id="with-error"
      placeholder="ameba-taro@example.com"
      type="email"
    ></TextField>
    <InvalidMessage visible>メールアドレスを入力してください</InvalidMessage>
    <InvalidMessage visible>メールアドレスの入力形式が違います</InvalidMessage>
    <InvalidMessage>すでに登録されているメールアドレスです</InvalidMessage>
  </p>
);

export const RadioInput = (): React.ReactNode => (
  <p>
    <Radio id="radio-a" name="type">
      A
    </Radio>
    <Radio id="radio-b" name="type">
      B
    </Radio>
  </p>
);
