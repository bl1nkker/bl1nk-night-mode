import { CREATE_PROJECT } from "../types";

const initState = {
    projects: [
        {id: 1, author:'Bl1nk' ,title: 'Shut the fuck up', content:'some text some text'},
        {id: 2, author:'Dagger' ,title: 'Shut ypur mouth', content:'some text some text'},
        {id: 3, author:'Bl1nk' ,title: 'Fuck up', content:'some text some text'},
        {id: 4, author:'Bl1nk' ,title: 'Shut up', content:'some text some text'}
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log(action.payload.project)
            break
    
        default:
            return state
    }
    
}

export default projectReducer