import { products } from '../config';
import { NEW_DATA } from './actions';

const initialState = {
    products
}

export const ProductReducer = (state=initialState,action) => {
    switch ( action.type ){
        case "NEW_DATA" :
            return{
                ...state,products: action.value
            }
        default:
            return state
    }
}

export const setProductMoal = (value) => {
    return {
        type: NEW_DATA,
        value
    }
}

