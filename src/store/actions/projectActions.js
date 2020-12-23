import { CREATE_PROJECT, CREATE_PROJECT_ERROR, CREATE_NOTIFICATION } from "../types"

export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) =>{
        const firestore = getFirestore()

        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
            
            // Here projects adds in firestore
            firestore.collection('projects').add(
                {...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: uid,
                createdAt: new Date()})
                .then( () =>{
                    dispatch(
                        {type: CREATE_PROJECT,
                            payload: {project:project}
                        })
                    })
                .catch( (error) => {
                    dispatch(
                        {type: CREATE_PROJECT_ERROR,
                            payload: {error:error}
                        })
                })
        }
} 

