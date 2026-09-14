import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Embed } from './Embed';
import 'ameba-color-palette.css/ameba-color-palette.css';
import './index.css';

const isEmbed =
  new URLSearchParams(window.location.search).get('mode') === 'embed';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isEmbed ? <Embed /> : <App />}</StrictMode>,
);
