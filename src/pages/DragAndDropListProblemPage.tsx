import React from 'react'
import DragContainer from '../components/DragContainer/DragContainer'
import { DragItem } from '../utils/types'
import { dragAndDropList } from '../data/appData'

const DragAndDropListProblemPage: React.FC = () => {
    
    return (
        <div className='drag-list-page'>
            <DragContainer isDraggable={true} items={dragAndDropList} />
        </div>
    )
}

export default DragAndDropListProblemPage