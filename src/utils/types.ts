/********************* Models ************************************ */

interface ICheckBoxNode {
    id: number;
    label: string;
    checked: boolean;
    indeterminate?: boolean;
    children: ICheckBoxNode[];
}

interface DragItem {
    id: number;
    heading: string,
    content: string;
}

interface SideNavItem {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
}

interface KanbanColumn {
    id: string;
    title: string;
    items: DragItem[];
}


/********************* Props ************************************ */

interface ThemeContextProp {
    theme: ThemeMode,
    toggleTheme: () => void;
}

interface DragContainerProps {
    isDraggable: boolean;
    items: DragItem[];
}

interface DragItemProps {
    isDraggable: boolean;
    item: DragItem;
    position?: number;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, item: DragItem, position: number) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>, item: DragItem, position: number) => void;
}

interface KanbanContextProp {
    title: string;
    children?: React.ReactNode;
}

interface KanbanBoardProps {
    columns: KanbanColumn[];
}

interface KanbanColumnProps {
    column: KanbanColumn;
}

interface KanbanColumnItemProps {
    id: number;
    title: string;
    content: string;
}

/********************* Enums************************************ */

enum ThemeMode {
    LIGHT = "Light",
    DARK = "Dark"
}


export {
    DragContainerProps,
    DragItem,
    DragItemProps,
    ICheckBoxNode, KanbanBoardProps, KanbanColumn, KanbanColumnItemProps, KanbanColumnProps, KanbanContextProp, SideNavItem,
    ThemeContextProp,
    ThemeMode
};

