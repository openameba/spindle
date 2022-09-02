import { DarkModeToggle } from 'https://unpkg.com/dark-mode-toggle';

export class SpindleThemeSwitch extends DarkModeToggle {
  constructor() {
    super();

    const styleEl = document.createElement('style');
    styleEl.textContent = `
      :host {
        --dark-mode-toggle-dark-icon: none;
        --dark-mode-toggle-light-icon: none;
        --dark-mode-toggle-icon-size: calc(18rem / 16);

        --light-mode-switch-background: var(--color-surface-tertiary, rgba(8, 18, 26, 0.08));
        --dark-mode-switch-background: var(--color-surface-tertiary, rgba(255, 255, 255, 0.1));
        --light-mode-focus-outline-color: var(--color-focus-clarity, #0091ff);
        --dark-mode-focus-outline-color: var(--color-focus-clarity, #0091ff);
        --light-mode-checked-background: var(--color-surface-primary, #fff);
        --dark-mode-checked-background: var(--color-surface-quaternary, rgba(255, 255, 255, 0.16));
      }

      [part=legend],
      [part=labelText] {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        width: 1px;
      }

      [part=fieldset] {
        align-items: center;
        background: var(--light-mode-switch-background);
        border-radius: 40px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row-reverse;
        height: 34px;
        list-style: none;
        margin: 0;
        padding: 4px;
        position: relative;
        top: 0;
        width: 84px;
      }

      :host([mode=dark]) [part=fieldset] {
        background: var(--dark-mode-switch-background);
      }

      [part=lightRadio],
      [part=darkRadio] {
        appearance: none;
      }

      label {
        cursor: initial;
      }

      [part=lightLabel],
      [part=darkLabel] {
        align-items: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 18px;
        display: flex;
        flex: 0 0 50%;
        height: 100%;
        justify-content: center;
        z-index: 1;
        width: 100%;
      }

      [part=lightLabel]::before {
        background-image: url('data:image/svg+xml;utf8, <svg fill="rgba(255, 255, 255, 0.16)" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zM12 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm1-4.5V3c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1s1-.45 1-1zM13 21v-1.5c0-.55-.45-1-1-1s-1 .45-1 1V21c0 .55.45 1 1 1s1-.45 1-1zm5.01-13.6 1.06-1.06a.996.996 0 1 0-1.41-1.41L16.6 5.99a.996.996 0 0 0 .71 1.7c.26 0 .51-.09.7-.29zM6.34 19.07l1.06-1.06a.996.996 0 1 0-1.41-1.41l-1.06 1.06a.996.996 0 0 0 .71 1.7c.26 0 .51-.09.7-.29zM22 12c0-.55-.45-1-1-1h-1.5c-.55 0-1 .45-1 1s.45 1 1 1H21c.55 0 1-.45 1-1zM5.5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.55 0 1-.45 1-1zm13.57 7.07a.996.996 0 0 0 0-1.41l-1.06-1.06a.996.996 0 1 0-1.41 1.41l1.06 1.06c.2.2.45.29.71.29.26 0 .51-.09.7-.29zM7.4 7.4a.996.996 0 0 0 0-1.41L6.34 4.93a.996.996 0 1 0-1.41 1.41L5.99 7.4c.19.2.45.3.71.3.26 0 .51-.1.7-.3z"/></svg>');
      }

      input:checked + [part=lightLabel]::before {
        background-image: url('data:image/svg+xml;utf8, <svg fill="%23de4d14" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0 2.48-2.02 4.5-4.5 4.5S7.5 14.48 7.5 12 9.52 7.5 12 7.5s4.5 2.02 4.5 4.5zM12 5.5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1zm0 13c-.55 0-1 .45-1 1V21c0 .55.45 1 1 1s1-.45 1-1v-1.5c0-.55-.45-1-1-1zm5.3-10.8c.26 0 .51-.1.71-.29l1.06-1.06a.996.996 0 1 0-1.41-1.41L16.6 5.99a.996.996 0 0 0 0 1.41c.19.2.45.3.7.3zM5.99 16.6l-1.06 1.06a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.06-1.06a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0zM21 11h-1.5c-.55 0-1 .45-1 1s.45 1 1 1H21c.55 0 1-.45 1-1s-.45-1-1-1zM5.5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.55 0 1-.45 1-1zm12.51 4.6a.996.996 0 1 0-1.41 1.41l1.06 1.06c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 0 0 0-1.41l-1.07-1.06zM5.99 7.4c.19.2.45.3.71.3.26 0 .51-.1.7-.3a.996.996 0 0 0 0-1.41L6.34 4.93a.996.996 0 1 0-1.41 1.41L5.99 7.4z"/></svg>');
      }

      [part=darkLabel]::before {
        background-image: url('data:image/svg+xml;utf8, <svg fill="rgba(8, 18, 26, 0.3)" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 21a9.03 9.03 0 0 1-5.58-1.92c-.67-.52-.94-1.37-.7-2.17.25-.81.96-1.37 1.82-1.42.75-.05 1.51-.25 2.24-.58 1.98-.9 3.42-2.73 3.76-4.79.22-1.34.04-2.69-.53-3.89-.37-.78-.23-1.67.36-2.29.58-.6 1.45-.77 2.23-.45 3.78 1.62 5.97 5.46 5.46 9.55-.49 3.94-3.56 7.16-7.46 7.82-.53.1-1.07.14-1.6.14zm2.82-15.67.01.04c.75 1.57.99 3.33.7 5.07-.45 2.7-2.33 5.11-4.9 6.28-.96.43-1.94.69-2.94.76 1.56 1.26 3.56 1.76 5.59 1.41 3.04-.51 5.43-3.02 5.81-6.09.39-3.21-1.32-6.21-4.27-7.47z"/></svg>');
      }

      input:checked + [part=darkLabel]::before {
        background-image: url('data:image/svg+xml;utf8, <svg fill="%23f5e100" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.07 3c5.17 1.25 8.38 6.98 6.28 12.22-1.33 3.34-4.59 5.66-8.18 5.77-2.75.09-5.23-1.05-6.96-2.9-.62-.67-.04-1.76.86-1.65.78.1 1.59.07 2.43-.09 2.99-.59 5.38-3.03 5.89-6.03.36-2.14-.18-4.16-1.31-5.72-.55-.76.08-1.82.99-1.6z"/></svg>');
      }

      :is([part=lightRadio], [part=darkRadio]):not(:checked) + label::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      input:focus + label {
        border-radius: 40px;
        outline: 2px solid var(--light-mode-focus-outline-color);
        outline-offset: 1px;
      }

      input[part=darkRadio]:focus + label {
        outline: 2px solid var(--dark-mode-focus-outline-color);
      }

      input:focus:not(:focus-visible) + label {
        outline: none;
      }

      [part=toggleLabel] {
        background: var(--light-mode-checked-background);
        border-radius: 40px;
        content: '';
        display: block;
        height: 26px;
        left: 4px;
        position: absolute;
        top: 4px;
        transform: translate(100%, 0);
        transition: transform ease-out 0.3s, background 0.3s;
        width: 38px;
      }

      [part=toggleLabel]::before {
        display: none;
      }

      [part=darkRadio]:checked ~ [part=toggleLabel] {
        background: var(--dark-mode-checked-background);
        transform: translate(0, 0);
        z-index: 1;
      }

      [part=aside] {
        display: none;
      }

      @media (prefers-reduced-motion: reduce) {
        [part=toggleLabel] {
          transition-duration: 0.1ms;
        }
      }
    `;
    this.shadowRoot?.appendChild(styleEl);

    // To add visibility hidden label text
    // The text should be addend in <label> ideally,
    // but it does not work well with DarkModeToggle
    this.shadowRoot
      ?.querySelector('[part=lightRadio]')
      ?.setAttribute('aria-label', 'ライトテーマ');
    this.shadowRoot
      ?.querySelector('[part=darkRadio]')
      ?.setAttribute('aria-label', 'ダークテーマ');

    // ameba-color-palette.css gets mode from this dataset
    const html = document.documentElement;
    html.dataset.colorScheme = this.mode;
    document.addEventListener('colorschemechange', () => {
      html.dataset.colorScheme = this.mode;
    });
  }
}

const ELEMENT_NAME = 'spindle-theme-switch';
customElements.define(ELEMENT_NAME, SpindleThemeSwitch);
