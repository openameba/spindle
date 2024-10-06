import React from 'react';

// TODO: remove this when the type definition is officially supported
declare module 'react' {
  interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
    switch?: string;
  }
}
