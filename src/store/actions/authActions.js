import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../types"

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

// newUser variable we will pass throught our function in SignUp.js component. It will contain certain amount of properties
export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{

        // Creating var for Firebase
        const firebase = getFirebase()

        // Creating var for Firestore
        const firestore = getFirestore()

        // Uses special method, that creates user using email and password (newUser.email, newUser.password)
        firebase.auth().createUserWithEmailAndPassword(
            // First Argument
            newUser.email,

            // Second Argument
            newUser.password
        )

        // Only after upper method ends, then
        .then( (response) => {
            //  this function will connect with the firestore and get users collection, that contain information about users content
            // (if this collection doesn't exist, firestore will create it automatically)
            // We don't use .collection().add(), because we don't want to firestore to create document's id automatically
            // It's necessary, because we want to connect user in firebase with user's data in firestore, using user id
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0] 
            })
        })

        // Dispatching an action
        .then( () => {
            dispatch ({type: SIGNUP_SUCCESS})
        })

        // Catching errors
        .catch( (error) => {
            dispatch ({type: SIGNUP_ERROR,
                     payload : { error: error.message }})
        })
    }
}