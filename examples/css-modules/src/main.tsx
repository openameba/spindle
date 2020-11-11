import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpindleButton } from './SpindleButton';

// Ameba color palette should be loaded before using Spindle UI
import 'ameba-color-palette.css';

import styles from './base.css';

const App = () => (
  <>
    <h1 className={styles.title}>Hello Spindle!</h1>
    <SpindleButton />
  </>
);

ReactDOM.render(<App />, document.body);
