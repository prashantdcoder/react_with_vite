interface ICheckBoxNode {
    id: number;
    label: string;
    checked: boolean;
    indeterminate?: boolean;
    children: ICheckBoxNode[];
}

export { ICheckBoxNode };