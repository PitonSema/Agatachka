import { combineReducers } from 'redux'

import Review from './Review'
import Order from './Order'

const rootReducer = combineReducers({
  Review,
  Order
})

export default rootReducer