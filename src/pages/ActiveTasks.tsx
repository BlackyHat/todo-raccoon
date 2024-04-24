import { useParams } from 'react-router-dom'

type TProps = {
  title: string
}
const ActiveTasks: React.FC<TProps> = ({ title }) => {
  const { taskStatus } = useParams()
  return (
    <>
      <h1>{title}</h1>
      <h2>
        this page will be display tasks from the list: {taskStatus} 🤠🐎🏇
      </h2>
    </>
  )
}
export default ActiveTasks
