import { PRODUCT_MODAL_DATA } from './actions';
import { products } from "../config";

const initialState = {
    productModalData: {},
    similarData: []
}
const handlerSimilarData = ( tags,withoutId ) => {
    const similarArray = [];
    tags.forEach( item => {
        products.forEach( elem => {
            elem.tags.forEach( tag => {
                if ( item === tag ) {
                    let haveId = false
                    similarArray.forEach( newData => {
                        if ( elem._id === newData._id ) {
                            haveId = true
                        }
                        if(elem._id === withoutId){
                            haveId = true
                        }
                    } )
                    if ( !haveId ) {
                        similarArray.push( elem )
                    }
                }
            } )
        } )
    } )
    return similarArray
}
export const productModalReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'PRODUCT_MODAL_DATA' :
            const falseArray = handlerSimilarData( action.value?.tags,action.value?._id )
            return { ...state, productModalData: action.value, similarData: falseArray };
        default:
            return state
    }
}
export const setProductModalData = ( value ) => {
    return {
        type: PRODUCT_MODAL_DATA,
        value
    }
}
