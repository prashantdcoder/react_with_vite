import React from 'react';
import { DragItemProps } from '../../utils/types';
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item';

const DragItem: React.FC<DragItemProps> = ({ onDragStart, item, position, onDragOver, isDraggable }) => {
    const { heading, content } = item;
    return (
        <div
            data-testid={`drag-item-${item.id}`}
            draggable={isDraggable}
            onDragEnter={(e) => onDragStart(e, item, position)}
            onDragEnd={(e) => onDragOver(e, item, position)}
        >
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle data-testid={`drag-item-title-${item.id}`}>{heading}</ItemTitle>
                    <ItemDescription data-testid={`drag-item-content-${item.id}`}>
                        {content}
                    </ItemDescription>
                </ItemContent>
            </Item>
        </div>

    )
}

export default DragItem