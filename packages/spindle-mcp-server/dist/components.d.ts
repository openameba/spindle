interface ComponentFile {
    name: string;
    content: string;
}
interface ComponentInfo {
    name: string;
    directory: string;
    implementation?: ComponentFile;
    styles?: ComponentFile;
    documentation?: ComponentFile;
    tests?: ComponentFile;
    figma?: ComponentFile;
}
export declare function getComponentInfo(componentName: string, directory: string): ComponentInfo | null;
export declare function getAllComponents(): ComponentInfo[];
export {};
