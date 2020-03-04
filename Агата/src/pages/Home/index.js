import Home from './Home'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Order } from '../../actions'

export default connect(
  (state) => ({
    Order: state.Order
  }),
  (dispatch) => ({
    OrderActions: bindActionCreators(Order, dispatch)
  })
)(Home)