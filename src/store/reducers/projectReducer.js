import { CREATE_PROJECT, CREATE_PROJECT_ERROR, DELETE_PROJECT_ERROR, DELETE_PROJECT } from "../types";

const initState = {
    projects: [
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return {...state};
        case CREATE_PROJECT_ERROR:
            console.log('create project error', action.payload.error)
            return state
        case DELETE_PROJECT_ERROR:
            console.log('delete project error', action.payload.error)
            return state
        case DELETE_PROJECT:
            console.log('project deleted')
            return state
        default:
            return state
    }
    
}

export default projectReducer