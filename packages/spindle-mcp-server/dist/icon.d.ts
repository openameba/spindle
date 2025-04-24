interface IconInfo {
    name: string;
    path: string;
    svgPath: string;
    viewBox: string;
    documentation: string;
}
export declare function getAllIcons(): Promise<string[]>;
export declare function getIconInfo(iconName: string): Promise<IconInfo | null>;
export declare function getIconUsage(): Promise<string>;
export {};
