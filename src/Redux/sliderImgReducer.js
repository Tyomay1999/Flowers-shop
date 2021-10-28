import { imagesForSlider } from "../config";
import { NEW_SLIDERIMAGES } from './actions';

const initialState = {
    sliderData: imagesForSlider
}

export const sliderDataReducer = (state = initialState,action) => {
    switch ( action.type ){
        case 'NEW_SLIDERIMAGES':
            return {...state, sliderImges: action.value};
        default:
            return state
    }
}

export const setSliderImages = (value) => {
    return {
        type: NEW_SLIDERIMAGES,
        value
    }
}