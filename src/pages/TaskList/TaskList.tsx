import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { selectTasksByStatus } from '@/redux'
import { getFormattedDate } from '@/utils'

// import scss from './TaskList.module.scss'

const TaskList: React.FC = () => {
  const { taskStatus } = useParams()

  const tasksByStatus = useAppSelector(state =>
    selectTasksByStatus(state, taskStatus)
  )

  return (
    <section className="section">
      <div className="container">
        <h1>
          Some title for list of <span>{taskStatus}</span> tasks 🤠🐎🏇
        </h1>
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
export default TaskList
