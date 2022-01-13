import {ADD_INITIAL_VALUE, ADD_TO_USER_IDENTIFY} from '../Types'


export const home = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_INITIAL_VALUE:
            return {
                ...action.value,
            };

        case ADD_TO_USER_IDENTIFY:
            return {
                ...state,
                userIdentify: action.value
            };
            
        default:
            return {
                ...state
            }
    }
}