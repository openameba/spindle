type SpindleThemeToggleAttribute = {
  appearance: 'switch';
  legend?: string;
  permanent?: boolean;
};

declare namespace JSX {
  interface IntrinsicElements {
    'spindle-theme-switch': SpindleThemeToggleAttribute;
  }
}
