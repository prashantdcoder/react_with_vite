interface ICheckBoxNode {
    id: number;
    label: string;
    checked: boolean;
    indeterminate?: boolean;
    children: ICheckBoxNode[];
}

interface ThemeContextProp {
    theme: ThemeMode,
    toggleTheme: () => void;
}

enum ThemeMode {
    LIGHT = "Light",
    DARK = "Dark"
}

export { ICheckBoxNode, ThemeMode, ThemeContextProp };