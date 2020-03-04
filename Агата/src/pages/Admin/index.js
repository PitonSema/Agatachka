import Admin from './Admin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Order, Review } from '../../actions/'

export default connect(
  (state) => ({
    Order: state.Order,
    Review: state.Review
  }),
  (dispatch) => ({
    OrderActions: bindActionCreators(Order, dispatch),
    ReviewActions: bindActionCreators(Review, dispatch)
  })
)(Admin)