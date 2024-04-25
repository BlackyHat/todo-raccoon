import { useParams } from 'react-router-dom'

import { TaskModal } from '@/components'

import { useAppSelector } from '@/hooks'
import { selectAllTasks } from '@/redux'
import { getFormattedDate } from '@/utils'

const Home: React.FC = () => {
  const { taskStatus } = useParams()

  const tasksByStatus = useAppSelector(selectAllTasks)

  return (
    <section className="section">
      <div className="container">
        <h1>
          this page will be display tasks from the list: {taskStatus} 🤠🐎🏇
        </h1>

        <TaskModal />

        {tasksByStatus.length > 0 ? (
          <ul>
            {tasksByStatus.map(task => (
              <li key={task.id.toString()}>
                <p>Created {getFormattedDate(task.id)}</p>
                <p>{task.name}</p>
                <p>{task.description}</p>
                <p>{task.completed}</p>
                <p>{task.deleted}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Try to add some goals</p>
        )}
      </div>
    </section>
  )
}
export default Home
