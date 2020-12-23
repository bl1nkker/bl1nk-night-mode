import { CHANGE_ROLE } from "../types"

export const changeRole = (user, new_role) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('users').doc(user.id).update({role: new_role})
        .then( () => {
            dispatch({type:CHANGE_ROLE, payload:{role:new_role}})
        })

    }
}