import React from 'react';
import useKanban from '../../hooks/useKanban';
import { KanbanColumnProps } from '../../utils/types';
import KanbanColumnItem from '../KanbanColumnItem/KanbanColumnItem';

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => {

    const { onDragStart, onDrop } = useKanban();

    const columnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return (
        <div data-container-id={column.id}
            onDragOver={columnDragOver}
            onDrop={(e) => onDrop(e, column.id)}
            className='block border p-4 rounded-md shadow-md bg-white w-64'>
            <div className='block'>
                <h1 data-testid={`drag-item-title-${column.id}`}>{column.title}</h1>
                <div data-testid={`drag-item-content-${column.id}`} className='flex flex-col gap-2 mt-2'>
                    {
                        column.items &&
                        column.items.map((item) => {
                            return (
                                <KanbanColumnItem key={item.id}
                                    id={item.id}
                                    title={item.heading}
                                    content={item.content}
                                    columnId={column.id}
                                    onDragStart={onDragStart}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default KanbanColumn;