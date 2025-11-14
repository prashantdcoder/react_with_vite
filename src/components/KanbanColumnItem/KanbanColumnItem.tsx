import React from 'react';
import { KanbanColumnItemProps } from '../../utils/types';
import { Item, ItemContent, ItemTitle, ItemDescription } from '../ui/item';


const KanbanColumnItem: React.FC<KanbanColumnItemProps> = ({id,content,title}) => {
    return (
       <Item variant="outline">
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