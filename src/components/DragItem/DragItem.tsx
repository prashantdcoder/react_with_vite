import React, { useRef } from 'react'
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item'
import { DragItemProps } from '../../utils/types';

const DragItem: React.FC<DragItemProps> = ({ onDragStart, item, position, onDragOver, isDraggable }) => {

    const itemRef = useRef<HTMLDivElement>(null);
    const { heading, content } = item;
    return (
        <div
            data-testid={`drag-item-${item.id}`}
            ref={itemRef}
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