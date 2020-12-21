export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) =>{
        const firestore = getFirestore()
        firestore.collection('projects').add(
            {...project,
            authorFirstName: 'bl1nk',
            authorLastName: 'd4gger',
            createdAt: new Date()})
            .then( () =>{
                dispatch(
                    {type: 'CREATE_PROJECT',
                        payload: {project:project}
                    })
                })
            .catch( (error) => {
                dispatch(
                    {type: 'CREATE_PROJECT_ERROR',
                        payload: {error:error}
                    })
            })
            
        
    }
} 