import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS } from "../types";
const initState = {
    authError: null
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, authError: null}
        case LOGIN_ERROR:
            return {...state, authError: 'Login Failed'}
        case SIGNOUT_SUCCESS:
            console.log('signout success')
            return state
        default:
            return state;
    }
}

export default authReducer