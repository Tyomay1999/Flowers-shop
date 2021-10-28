import {
    FILTERED_BY_PRICE,
    FILTERED_BY_GROWTH,
    FILTERED_BY_TAGS_NAME,
    FILTERED_BY_COLOR,
    FILTERED_BY_FLOWER_NAME
} from "./actions";
import { products } from '../config';

const initialState = {
    filterByPriceData: [],
    filterByGrowthData: [],
    filterByTagsData: [],
    filterByColorsData: [],
    filterByFlowerNameData: []
}

export const filterDataReducer = ( state = initialState, action ) => {
    console.log( action, 'action' );
    switch ( action.type ) {
        case FILTERED_BY_PRICE:
            return {
                ...state,
                filterByPriceData: products.filter( item => item.prices.price > action.value[0] && item.prices.price < action.value[1] )
            }
        case FILTERED_BY_GROWTH:
            return {
                ...state,
                filterByGrowthData: products.filter( item => item.description.growth <= action.value )
            }
        case FILTERED_BY_COLOR:
            let filteredColorDataArray = []
            if(action.value.length){
                action.value.forEach(elem => {
                    products.forEach(item => {
                        let k = 0;
                        item.description.color.forEach(color => {
                            if(color === elem){
                                k += 1
                            }
                        })
                        if(k){
                            k = 0
                            let productIdCount = 0
                            filteredColorDataArray.forEach(product => {
                                if(product._id === item._id){
                                    productIdCount += 1
                                }
                            })
                            if(!productIdCount){
                                filteredColorDataArray.push(item)
                            }
                        }
                    })
                })
            }else{
                filteredColorDataArray = products
            }
            return {
                ...state,
                filterByColorsData: filteredColorDataArray,
            }
        case FILTERED_BY_TAGS_NAME:
            return { ...state }
        case FILTERED_BY_FLOWER_NAME:
            return {
                ...state,
                filterByFlowerNameData: products.filter( item => item.flowerName === action.value )
            }
        default:
            return state
    }
}

export const setFilterDataByPrice = ( price ) => {
    return {
        type: FILTERED_BY_PRICE,
        value: price
    }
}
export const setFilterDataByGrowth = ( growth ) => {
    return {
        type: FILTERED_BY_GROWTH,
        value: growth
    }
}
export const setFilterDataByTagsName = ( tagsName ) => {
    return {
        type: FILTERED_BY_TAGS_NAME,
        value: tagsName
    }
}
export const setFilterDataByColor = ( colors ) => {
    return {
        type: FILTERED_BY_COLOR,
        value: colors
    }
}
export const setFilterDataByFlowerName = ( flowerName ) => {
    return {
        type: FILTERED_BY_FLOWER_NAME,
        value: flowerName
    }
}

