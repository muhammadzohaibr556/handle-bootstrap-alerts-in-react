import { CLEAR_MESSAGE, MESSAGE } from "../actions/actionTypes"

const initialState = {
    msg: {},
    status: null
}

const message_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_MESSAGE:
            return {
                msg: {},
                status: null
            }
        case MESSAGE:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state
    }
}

export default message_reducer;