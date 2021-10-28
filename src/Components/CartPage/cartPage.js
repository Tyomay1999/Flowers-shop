import React from 'react';
import { useSelector } from "react-redux";
import cartPageStyle from "../CartPage/cartPage.module.scss";
import CartProduct from "./cartProduct";
import { v4 as uuidv4 } from 'uuid'
const CartPage = () => {
    const cartData = useSelector(state => state?.cartData.cartData);

    console.log( cartData );
    return (
        <div className={cartPageStyle.main}>
            {
                cartData.map(elem => {
                    return(
                        <div key={uuidv4()} className={cartPageStyle.container}>
                            <CartProduct product={elem}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartPage
