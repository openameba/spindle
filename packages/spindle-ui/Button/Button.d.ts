import React from 'react';
declare type Layout = 'intrinsic' | 'fullWidth';
declare type Size = 'large' | 'medium' | 'small';
declare type Variant = 'contained' | 'outlined' | 'neutral' | 'danger';
declare type Props = {
    layout?: Layout;
    size?: Size;
    variant?: Variant;
    icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: React.FC<Props>;
export {};
//# sourceMappingURL=Button.d.ts.map