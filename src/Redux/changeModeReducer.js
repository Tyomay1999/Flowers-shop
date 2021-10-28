import { CHANGE_MODE } from './actions'
const initialState = {
    darkOrLight: true,
}

export const changeModeReducer = (state = initialState,action) => {
    switch ( action.type ){
        case 'CHANGE_MODE':
            return { ...state,darkOrLight: action.value };
        default:
            return state
    }
}
export const setDarkOrLight = (value) => {
    return {
        type: CHANGE_MODE,
        value
    }
}
