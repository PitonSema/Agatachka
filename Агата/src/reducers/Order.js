import { ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../constants'

const initialState = {
  data: []
}

export default (state = initialState, action) =>{
  switch (action.type) {
    
    case ADD_ORDER:
      return {
        data: [...state.data, action.payload]
      }

      case UPDATE_ORDER:
        return {
          data: action.payload
        }

      case DELETE_ORDER:
        return {
          data: state.data.filter(item => item.id !== action.payload)
        }

    default:
      return state
    }
}