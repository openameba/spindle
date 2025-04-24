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
interface Components {
    componentList: string[];
    documentation: string;
}
export declare function getComponentInfo(componentName: string, directory: string): ComponentInfo | null;
export declare function getComponents(): Promise<Components>;
export {};
