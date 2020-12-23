import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../types";
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
        case SIGNUP_SUCCESS:
            console.log('sign up success')
            return {...state, authError: null}
        case SIGNUP_ERROR:
            console.log('sign up error')
            return {...state, authError: action.payload.error}
        default:
            return state;
    }
}

export default authReducer