import React from 'react';
import { KanbanColumnItemProps } from '../../utils/types';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';


const KanbanColumnItem: React.FC<KanbanColumnItemProps> = ({ columnId, id, content, title, onDragStart }) => {

    return (
        <Item
            data-item-id={id}
            draggable={true}
            variant="outline"
            className="cursor-move bg-gray-50"
            onDragStart={(e) => onDragStart(e, columnId)}
        >
            <ItemContent>
                <ItemTitle data-testid={`drag-item-title-${id}`}>{title}</ItemTitle>
                <ItemDescription data-testid={`drag-item-content-${id}`}>
                    {content}
                </ItemDescription>
            </ItemContent>
        </Item>
    );
};

export default KanbanColumnItem;