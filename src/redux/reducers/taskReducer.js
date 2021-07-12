import { SHOW_ALL_TASKS, SHOW_TASK, ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/types'

//every reducer has its own state!:

const initialState = {
  tasks: []
}

export default function (state = initialState, action) {

  switch (action.type) {
    case SHOW_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case SHOW_TASK:
      return {
        ...state,
        tasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? (task = action.payload) : task)
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    default:
      return state
  }

}

