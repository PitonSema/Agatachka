import { ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../constants'

export const addOrder = (id, name, telephon, time, email, date, dopInfo, holiday, countParticipant) => async (dispatch) => {
  try {

    const helpers = JSON.parse(localStorage.getItem('order'))
    helpers.push({id, name, telephon, time, email, date, dopInfo, holiday, countParticipant})
    console.log(helpers)
    localStorage.setItem('order', JSON.stringify(helpers))

    dispatch({
      type: ADD_ORDER,
      payload: {helpers}
    })
  } catch(error) {
    console.log(error)
  }
}

export const deleteOrder = (id) => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('order'))

    const helpersTwo = helpers.filter(item => item.id !== id)

    localStorage.setItem('order', JSON.stringify(helpersTwo))

    dispatch({
      type: DELETE_ORDER,
      payload: id
    })
  } catch(error) {
    console.log(error)
  }
}

export const UpdateOrder = () => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('order'))

    dispatch({
      type: UPDATE_ORDER,
      payload: helpers
    })
  } catch(error) {
    console.log(error)
  }
}