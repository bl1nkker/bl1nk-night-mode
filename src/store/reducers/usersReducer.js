import { CHANGE_ROLE } from "../types";

const initState = {
}

const userReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_ROLE:
            console.log('the role had been changed')
            return {...state};

        default:
            return state
    }
    
}

export default userReducer