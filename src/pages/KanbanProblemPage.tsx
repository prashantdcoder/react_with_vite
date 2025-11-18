import React from 'react'
import KanbanBoard from '../components/KanbanBoard/KanbanBoard'
import KanbanProvider from '../context/KanbanContext'
import { kanbanBoardColumns } from '../data/appData'

const KanbanProblemPage: React.FC = () => {

    return (
        <div className='kanban-page-container w-full'>
            <KanbanProvider title='Kanban Demo' columns={kanbanBoardColumns}>
                <KanbanBoard />
            </KanbanProvider>
        </div>
    )
}

export default KanbanProblemPage