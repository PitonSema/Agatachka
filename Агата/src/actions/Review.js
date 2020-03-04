import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../constants'

export const addReview = (id, name, messages) => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('review'))
    helpers.push({id, name,messages})
    console.log('id===',id)
    localStorage.setItem('review', JSON.stringify(helpers))

    dispatch({
      type: ADD_REVIEW,
      payload: {name, messages}
    })
  } catch(error) {
    console.log(error)
  }
}

export const deleteReview = (id) => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('review'))

    const helpersTwo = helpers.filter(item => item.id !== id)

    localStorage.setItem('review', JSON.stringify(helpersTwo))

    dispatch({
      type: DELETE_REVIEW,
      payload: id
    })
  } catch(error) {
    console.log(error)
  }
}

export const Update = () => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('review'))

    dispatch({
      type: UPDATE_REVIEW,
      payload: helpers
    })
  } catch(error) {
    console.log(error)
  }
}