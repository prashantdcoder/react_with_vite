import React from 'react';
import { KanbanBoardProps } from '../../utils/types';
import KanbanColumn from '../KanbanColumn/KanbanColumn';

const KanbanBoard: React.FC<KanbanBoardProps> = ({columns}) => {
    return (
        <div className='kanban-board-ontainer w-full h-full flex gap-2 p-4'>
            {
                columns && columns.map((col) => <KanbanColumn column={col}  />)
            }
        </div>
    );
};

export default KanbanBoard;