import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './redux'

const TaskForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    //on ajoute une tâche dans le store
    dispatch(addTask(text))
    //on vide le state useState
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}

export default TaskForm
