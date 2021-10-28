import React, { useEffect, useState } from 'react'
import cardStyles from './card.module.scss'
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch, useSelector } from "react-redux";
import { setProductModalData } from "../../../Redux/productModalReducer";
import { deleteProductInCart, setCartData } from "../../../Redux/cartReducer";

const Card = ( { flower, scroll, setShowModal } ) => {
    const { flowerName, prices, photos, description,_id } = flower
    const [infoIsOpen, openInfo] = useState( false )
    const dispatch = useDispatch()
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    const cartData = useSelector(state => state?.cartData.cartData)

    useEffect(() => {
        let k = 0;
        cartData.length ? cartData.forEach((elem,index) => {
            if(elem._id === _id){
                openInfo(true)
                k = 1
            }else if(!k && !cartData[index + 1]){
                openInfo(false)
            }
        })
            : openInfo(false)
    },[cartData,_id])
    return (
        <div className={ cardStyles.wrapper }>
            <div className={ cardStyles.container }>
                <img onClick={ () => {
                    // setModalData( flower )
                    dispatch(setProductModalData( flower ))
                    if ( scroll ) {
                        scroll( 0 )
                    }
                    setShowModal( true )
                } } src={ photos[0] } className={ cardStyles.top } alt='product'/>
                <div
                    className={ infoIsOpen ? `${ cardStyles.bottom } ${ cardStyles.clicked }` : cardStyles.bottom }>
                    <div className={ darkOrLight ? cardStyles.left : cardStyles.left1 }>
                        <div className={ cardStyles.details }>
                            <h5>{ flowerName }</h5>
                        </div>
                        <div onClick={ () => {
                            openInfo( true );
                            dispatch(setCartData(flower))
                        } }
                             className={ darkOrLight ? cardStyles.buy : cardStyles.buy1 }><AddShoppingCartIcon/>
                        </div>
                    </div>
                    <div className={ cardStyles.right }>
                        <div className={ cardStyles.done }><DoneIcon/></div>
                        <div className={ cardStyles.details }>
                            <h1>{ flowerName }</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div onClick={ () => {
                            openInfo( false );
                            dispatch(deleteProductInCart(_id))
                        } } className={ cardStyles.remove }><ClearIcon/></div>
                    </div>
                </div>
            </div>
            <div onClick={ () => {
                dispatch(setProductModalData( flower ))
                if ( scroll ) {
                    scroll( 0 )
                }
                setShowModal( true )
            } } className={ !darkOrLight ? cardStyles.inside : cardStyles.inside1 }>
                <div className={ cardStyles.icon }><InfoIcon/></div>
                <div className={ cardStyles.contents }>
                    <table>
                        <tbody>
                        <tr>
                            <th>Width</th>
                            <th>Growth</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>{ description.growth }sm</td>
                        </tr>
                        <tr>
                            <th>Price One</th>
                            <th>Price many</th>
                        </tr>
                        <tr>
                            <td>{ prices.price }</td>
                            <td>200$</td>
                        </tr>
                        </tbody>
                        <hr className={ cardStyles.hr }/>
                        <tbody>
                        <tr>
                            <th>Width</th>
                            <th>Growth</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>{ description.growth }sm</td>
                        </tr>
                        <tr>
                            <th>Price One</th>
                            <th>Price many</th>
                        </tr>
                        <tr>
                            <td>{ prices.price }</td>
                            <td>200$</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default  Card
