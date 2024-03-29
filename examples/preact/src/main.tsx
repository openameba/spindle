import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpindleButton } from './SpindleButton';

// Ameba color palette should be loaded before using Spindle UI
import 'ameba-color-palette.css';

import './base.css';

const App = () => (
  <>
    <h1 className="title">Hello Spindle!</h1>
    <SpindleButton />
  </>
);

const container = document.body;
const root = createRoot(container);
root.render(<App />);
