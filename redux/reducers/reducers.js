import tasks from './todolist'
import { combineReducers } from 'redux'

export default combineReducers({
    task: tasks
})