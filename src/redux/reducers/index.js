import { combineReducers } from 'redux' //to put together reducers we'll use
import taskReducer from './taskReducer'


export default combineReducers({
  tasks: taskReducer
})