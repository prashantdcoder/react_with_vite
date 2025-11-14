import React from 'react'
import { DragContainerProps, DragItem as DragItemModel } from '../../utils/types'
import DragItem from '../DragItem/DragItem'

const DragContainer: React.FC<DragContainerProps> = ({ isDraggable, items }) => {
    const [sortableItems, setSortableItems] = React.useState<DragItemModel[]>([...items]);
    const latestPostionRef = React.useRef<number | null>(0);

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, item: DragItemModel, position: number): void => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", item.id.toString());
        latestPostionRef.current = position;
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>, item: DragItemModel, position: number): void => {
        const latestPosition: number = latestPostionRef.current;
        const experimentItems = [...sortableItems];
        const [draggedItem] = experimentItems.splice(position, 1);
        experimentItems.splice(latestPosition, 0, draggedItem);
        latestPostionRef.current = null;
        setSortableItems(experimentItems);
    }

    return (
        <div className='drag-container flex flex-col gap-2 p-4 cursor-grab'>
            {
                sortableItems.map((item, index) =>
                    <DragItem
                        isDraggable={isDraggable}
                        key={item.id}
                        item={item}
                        position={index}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                    />)
            }
        </div>
    )
}

export default DragContainer