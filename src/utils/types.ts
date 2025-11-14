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

interface DragContainerProps {
    isDraggable: boolean;
    items: DragItem[];
}

interface DragItem {
    id: number;
    heading: string,
    content: string;
}

interface DragItemProps {
    isDraggable: boolean;
    item: DragItem;
    position?: number;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, item: DragItem, position: number) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>, item: DragItem, position: number) => void;
}

interface SideNavItem {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
}


/********************* Enums************************************ */

enum ThemeMode {
    LIGHT = "Light",
    DARK = "Dark"
}


export {
    ICheckBoxNode,
    ThemeMode,
    ThemeContextProp,
    DragContainerProps,
    DragItem,
    DragItemProps,
    SideNavItem
};