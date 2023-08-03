import { configureStore, createSlice } from '@reduxjs/toolkit'

//! c'est une partie de notre store mais en réalite il faut le faire: const { actions, reducer } = createSlice et ensuite intégrer le reducer dans le store créé avec configureStore!
//on crée une tranche de notre état global qui concerne les Todo
const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 1, text: 'Faire les courses', done: false },
    { id: 2, text: 'Ménage !', done: true },
  ],
  //ensemble d'interactions possibles avec notre état
  reducers: {
    //action creators(!objet) avec type, payload
    //le state en réalité est un draft
    addTask: (state, action) => {
      // {type: "todo/addTask", payload: "Aller faire les courses"}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      }
      state.push(newTask)
    },
    toggleTask: (state, action) => {
      // {type: "todo/toggleTask", payload: 20}
      //on cherche dans le state la task dont l'ID orrespond
      //id est passée en payload
      const task = state.find((t) => t.id === action.payload)
      task.done = !task.done
    },
    deleteTask: (state, action) => {
      // {type: "todo/deleteTask", payload: 20}
      //state est égal à state filtré qui contient toutes las tasks SAUF celle dont l'ID est passée en payload de l'action (cad celle qu'on souhaite supprimer)
      state = state.filter((t) => t.id !== action.payload)
      return state
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

//action creators :
export const { addTask, toggleTask, deleteTask } = todoSlice.actions
