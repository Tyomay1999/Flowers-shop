import React from 'react'
import { Link } from 'react-router-dom';
import cartWindowStyles from './cartWindow.module.scss';
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteProductInCart } from "../../../Redux/cartReducer";

const CartWindow = ({setCartModal}) => {
    const dispatch = useDispatch();
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    const cartData = useSelector(state => state?.cartData.cartData)
    return (
        <section onClick={ ( e ) => e.stopPropagation() } className={ cartWindowStyles.main }>
            <span className={ darkOrLight ? cartWindowStyles.span : cartWindowStyles.span1 }/>
            <div className={ darkOrLight ? cartWindowStyles.title : cartWindowStyles.title1 }>
                <p>your products in cart</p>
            </div>
            <div className={ cartData.length ? cartWindowStyles.container : cartWindowStyles.container1 }>
                {
                    cartData.length ? <>{
                        cartData.map( ( { flowerName, prices, photos, _id }, index ) => {
                                return (
                                    <div key={ `flower${ index }` } className={ cartWindowStyles.product }>
                                        <div className={ cartWindowStyles.blockLeft }>
                                            <img src={ photos[0] } alt='productPhoto'/>
                                        </div>
                                        <div className={ cartWindowStyles.blockRight }>
                                            <h6>{ flowerName }</h6>
                                            <div>
                                                <p>PRICE: { prices.price }</p>
                                                <span>COUNT</span>
                                            </div>
                                            <DeleteForeverIcon
                                                onClick={ () => dispatch(deleteProductInCart(_id)) }
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }</> : <p>You haven't item in your cart</p>
                }
            </div>
            <div className={ cartWindowStyles.product }/>
            <div  className={ darkOrLight ? cartWindowStyles.footerBlock : cartWindowStyles.footerBlock1 }>
                {  cartData[0] && <Link onClick={ () => setCartModal( false ) } to='cart'>View all</Link> }
            </div>
        </section>
    )
}


export default CartWindow;
