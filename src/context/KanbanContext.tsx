import React, { createContext, useState } from "react";
import { generateUniqueId } from "../utils/appUtils";
import { KanbanColumnItem, KanbanContextProp, KanbanProviderProps } from "../utils/types";


export const KanbanContext = createContext<KanbanContextProp>(null);

const KanbanProvider = ({ children, title, columns: initialColumns }: KanbanProviderProps) => {
    const [columns, setColumns] = useState([...initialColumns]);
    const sourceRef = React.useRef<string>('');
    const destinationRef = React.useRef<string>('');
    const moveTaskIdRef = React.useRef<string>('');

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, sourceId: string): void => {
        moveTaskIdRef.current = e.currentTarget.dataset.itemId;
        sourceRef.current = sourceId;
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, destinationId: string): void => {
        destinationRef.current = destinationId;
        moveTask();
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    };

    const moveTask = () => {
        const sourceColumnId: string = sourceRef.current;
        const destinationColumnId: string = destinationRef.current;
        const taskId: string = moveTaskIdRef.current;
        const extractItemFromSource: KanbanColumnItem = columns.find(col => col.id === sourceColumnId)?.items.find(item => item.id === taskId);
        if (sourceColumnId === destinationColumnId) {
            return;
        }
        const updatedColumns = columns.map((col) => {
            if (col.id === sourceColumnId) {
                return {
                    ...col,
                    items: col.items.filter(item => item.id !== taskId)
                }
            }

            if (col.id === destinationColumnId) {
                const newItems = col.items.concat({ ...extractItemFromSource, id: generateUniqueId() } as any);
                return {
                    ...col,
                    items: [...newItems],
                }
            }
            return col;
        })
        setColumns(updatedColumns);
    };

    return (
        <KanbanContext.Provider value={{ title, onDragStart, onDrop, columns, onDragOver }}>
            {children}
        </KanbanContext.Provider>
    );
};

export default KanbanProvider;