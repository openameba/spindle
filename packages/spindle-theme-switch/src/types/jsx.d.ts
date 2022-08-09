type SpindleThemeToggleAttribute = {
  legend?: string;
  permanent?: boolean;
  appearance?: 'switch' | 'toggle';
};

declare namespace JSX {
  interface IntrinsicElements {
    'spindle-theme-switch': SpindleThemeToggleAttribute;
  }
}
