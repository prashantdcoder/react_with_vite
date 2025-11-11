import React from 'react'
import DragContainer from '../components/DragContainer/DragContainer'
import { DragItem } from '../utils/types'

const DragAndDropListProblemPage: React.FC = () => {
    const items: DragItem[] = [
        {
            id: 1,
            heading: 'Java',
            content: 'Java is a high-level, object-oriented programming language and computing platform'
        },
        {
            id: 2,
            heading: 'React',
            content: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript'
        },
        {
            id: 3,
            heading: 'Python',
            content: 'Python is a programming language that lets you work quickly and integrate systems more effectively'
        }
    ]
    return (
        <div className='drag-list-page'>
            <DragContainer isDraggable={true} items={items} />
        </div>
    )
}

export default DragAndDropListProblemPage