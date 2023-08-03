import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TasksList = () => {
  //on récupère les tasks depuis store
  //const tasks = useSelector((state) => console.log(state))
  const tasks = useSelector((state) => state.todo)
  return (
    <>
      {tasks?.map((t) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  )
}

export default TasksList
