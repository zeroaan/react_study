import { ADD_TODO } from "../actions/types"

const initialState = {
  list: ["first todo"],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newList = [...state.list, action.text]
      return { ...state, list: newList }
    default:
      return state
  }
}

export default todoReducer
