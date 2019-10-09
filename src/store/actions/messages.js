import * as actionTypes from "./actionTypes";


export const ClearMessage = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_MESSAGE,
    })
  }
}

export const Message = (msg, status) => {
  return {
    type: actionTypes.MESSAGE,
    payload: { msg, status }
  }
}