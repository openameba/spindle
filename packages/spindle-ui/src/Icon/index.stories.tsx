import React from 'react';
import { Clock } from './index';

export default {
  title: 'Icon',
};

export const Normal = (): React.ReactNode => <Clock aria-label="Clock"></Clock>;

export const WithColor = (): React.ReactNode => (
  <div style={{ color: 'green' }}>
    <Clock aria-label="Clock"></Clock>
  </div>
);

export const WithSize = (): React.ReactNode => (
  <div>
    <Clock aria-label="Clock" height="200" width="200"></Clock>
  </div>
);
