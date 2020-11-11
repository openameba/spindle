import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { SpindleButton } from './SpindleButton';

// Ameba color palette should be loaded before using Spindle UI
import 'ameba-color-palette.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Meiryo, "Yu Gothic Medium", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.3;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <Title>Hello Spindle!</Title>
    <SpindleButton />
  </>
);

ReactDOM.render(<App />, document.body);
