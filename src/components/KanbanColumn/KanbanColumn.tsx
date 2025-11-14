import React from 'react';
import { KanbanColumnProps } from '../../utils/types';
import KanbanColumnItem from '../KanbanColumnItem/KanbanColumnItem';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => {
    return (
        <Item variant="outline" className='block border rounded-md shadow-md bg-white w-64'>
            <ItemContent>
            <ItemTitle data-testid={`drag-item-title-${column.id}`}>{column.title}</ItemTitle>
            <ItemDescription data-testid={`drag-item-content-${column.id}`} className='flex flex-col gap-2 mt-2'>
                {
                column.items &&
                column.items.map((item) => {
                    return (
                    <KanbanColumnItem key={item.id} id={item.id} title={item.heading} content={item.content} />
                    )
                })
                }
            </ItemDescription>
            </ItemContent>
        </Item>
    );
};

export default KanbanColumn;