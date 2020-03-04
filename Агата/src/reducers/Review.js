import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../constants'

const initialState = {
  data: []
}

export default (state = initialState, action) =>{
  switch (action.type) {
    
    case ADD_REVIEW:
      return {
        data: [...state.data, action.payload]
      }

      case UPDATE_REVIEW:
        return {
          data: action.payload
        }

        case DELETE_REVIEW:
          return{
            data: state.data.filter(item => item.id !== action.payload)
          }

    default:
      return state
    }
}