import React from 'react'
import KanbanProvider from '../context/KanbanContext'
import KanbanBoard from '../components/KanbanBoard/KanbanBoard'
import { KanbanColumn } from '../utils/types'

const KanbanProblemPage: React.FC = () => {
  
    const columns: KanbanColumn[] = [
        {
            id:'todo',
            title: 'To Do',
            items: [
                { id: 1, heading: 'Task 1', content: 'Todo Task 1' },
                { id: 2, heading: 'Task 2', content: 'Todo Task 2' }]
        },
        {
            id:'inprogress',
            title: 'In Progress',
            items: [
                { id: 1, heading: 'Task 3', content: 'Inprogress task 1' },
                { id: 2, heading: 'Task 4', content: 'Inprogress task 2' },
                { id: 3, heading: 'Task 4', content: 'Inprogress task 3' },

            ]
        }
    ]
    return (
        <div>
            <KanbanProvider title='Kanban Demo'>
                <KanbanBoard columns={columns} />
            </KanbanProvider>
        </div>
    )
}

export default KanbanProblemPage