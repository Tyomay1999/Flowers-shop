import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { changeModeReducer } from "./changeModeReducer";
import { ProductReducer } from "./productReducer";
import thunkMiddleware from "redux-thunk";
import { sliderDataReducer } from "./sliderImgReducer";
import { productModalReducer } from "./productModalReducer";
import { cartReducer } from "./cartReducer";
import { filterDataReducer } from "./filterReducer";


let reducers = combineReducers( {
    changeMode: changeModeReducer,
    products: ProductReducer,
    sliderData: sliderDataReducer,
    productModalData: productModalReducer,
    cartData: cartReducer,
    filterData: filterDataReducer
} )
let store = createStore(
    reducers,
    compose(
        applyMiddleware( thunkMiddleware ),
    ),
)
export default store