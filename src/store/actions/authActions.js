import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from "../types"

export const signIn = (credentionals) =>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentionals.email,
            credentionals.password
        )
        .then( () => {
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch( (error) =>{
            dispatch({ type: LOGIN_ERROR, error})
        })
    }
}

export const signOut = () =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then( () => {
            dispatch({ type: SIGNOUT_SUCCESS})
        })
        
    }
}