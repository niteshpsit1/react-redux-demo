import { ADD_TODO } from '../actions/constants'

export function task(state=[], action) {
    switch (action.type) {
    case ADD_TODO:
      return Object.assign([],[action.text, ...state])
    default:
      return state
  } 
}