interface IconInfo {
    name: string;
    path: string;
    documentation: string;
}
interface Icons {
    iconList: string[];
    documentation: string;
}
export declare function getIcons(): Promise<Icons>;
export declare function getIconInfo(iconName: string): Promise<IconInfo | null>;
export {};
