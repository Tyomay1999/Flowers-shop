import { ADD_PRODUCT_IN_DATA,DELETE_PRODUCT_IN_DATA } from "./actions";

const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ADD_PRODUCT_IN_DATA :
            return {...state,cartData: [...state.cartData,action.value]};
        case DELETE_PRODUCT_IN_DATA:
            return {...state,cartData: state.cartData.filter(product => product._id !== action.id)}
        default:
            return state
    }
}

export const setCartData = (product) => {
    return{
        type: ADD_PRODUCT_IN_DATA,
        value: product
    }
}
export const deleteProductInCart = (id) => {
    return{
        type: DELETE_PRODUCT_IN_DATA,
        id,
    }
}