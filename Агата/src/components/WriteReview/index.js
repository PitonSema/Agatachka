import WriteReview from './WriteReview'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Review } from '../../actions'
export default connect(
  (state) => ({
    Review: state.Review
  }),
  (dispatch) => ({
    ReviewActions: bindActionCreators(Review, dispatch)
  })
)(WriteReview)
