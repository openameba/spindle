import 'react';

// TODO: remove this when the type definition is officially supported
declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    switch?: string;
  }

  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
