import { TaskActions } from '@/components'

import { getFormattedDate } from '@/utils'

import { TaskListProps } from './types'

import scss from './TaskList.module.scss'

export const TaskList: React.FC<TaskListProps> = ({ tasks }) =>
  tasks.length > 0 ? (
    <ul className={scss.taskList}>
      {tasks.map(task => (
        <li
          key={task.id}
          className={`${scss.listItem} 
        ${task.completed ? scss.completed : ''} 
        ${task.deleted ? scss.deleted : ''}`}
        >
          <div className={scss.heading}>
            <p className={scss.listTitle}>{task.name}</p>

            <TaskActions
              id={task.id}
              isCompleted={task.completed}
              isDeleted={task.deleted}
            />
          </div>
          <p className={scss.date}>{getFormattedDate(task.id)}</p>

          <p className={scss.desc}>{task.description}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={scss.label}>Try to add some goals...</p>
  )
