import { TaskList, TaskModal } from '@/components'

import { useAppSelector } from '@/hooks'
import { selectAllTasks } from '@/redux'
import { getFormattedDate } from '@/utils'

import scss from './Home.module.scss'

const Home: React.FC = () => {
  const allTasks = useAppSelector(selectAllTasks)

  return (
    <section className="section">
      <div className="container">
        <div className={scss.titleContainer}>
          <div>
            <h1 className={scss.label}>Today's Tasks 🤠</h1>

            <p className={scss.date}>{getFormattedDate(Date.now())}</p>
          </div>

          <TaskModal />
        </div>

        <TaskList tasks={allTasks} />
      </div>
    </section>
  )
}
export default Home
