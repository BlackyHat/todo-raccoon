import { useParams } from 'react-router-dom'

import { TaskList } from '@/components'

import { useAppSelector } from '@/hooks'
import { selectTasksByStatus } from '@/redux'

import scss from './TaskList.module.scss'

const Tasks: React.FC = () => {
  const { taskStatus } = useParams()

  const tasksByStatus = useAppSelector(state =>
    selectTasksByStatus(state, taskStatus)
  )

  return (
    <section className="section">
      <div className="container">
        <h1 className={scss.title}>
          The list of <span>{taskStatus}</span> tasks 🐎🤠🏇
        </h1>
        <TaskList tasks={tasksByStatus} />
      </div>
    </section>
  )
}
export default Tasks
