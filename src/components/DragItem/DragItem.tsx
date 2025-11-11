import React, { useRef } from 'react'
import { Item, ItemContent, ItemDescription, ItemTitle } from '../ui/item'
import { DragItemProps } from '../../utils/types';

const DragItem: React.FC<DragItemProps> = ({ onDragStart, item, position, onDragOver }) => {

    const itemRef = useRef<HTMLDivElement>(null);
    const { heading, content } = item;
    return (
        <div
            ref={itemRef}
            draggable={true}
            onDragEnter={(e) => onDragStart(e, item, position)}
            onDragEnd={(e) => onDragOver(e, item, position)}
            >
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle>{heading}</ItemTitle>
                    <ItemDescription>
                        {content}
                    </ItemDescription>
                </ItemContent>
            </Item>
        </div>

    )
}

export default DragItem