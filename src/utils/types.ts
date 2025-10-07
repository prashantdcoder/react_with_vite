interface ICheckBoxNode {
    id: number;
    label: string;
    checked: boolean;
    children: ICheckBoxNode[];
}

export { ICheckBoxNode };