interface IconInfo {
    name: string;
    path: string;
    svgPath: string;
    viewBox: string;
}
export declare function getAllIcons(): Promise<string[]>;
export declare function getIconInfo(iconName: string): Promise<IconInfo | null>;
export {};
