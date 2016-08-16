import { ADD_TODO } from './constants'

export default function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

