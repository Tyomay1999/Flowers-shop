import React, { useState } from 'react';
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import { TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { deleteProductInCart } from "../../Redux/cartReducer";
import cartPageStyle from "../CartPage/cartPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {defaultImages} from '../../Assets/Images/DefaultsImg/defaults'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';


const CartProduct = ({product}) => {
    const {_id,photos,flowerName,prices,description} = product
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState( 1)
    const [selectedImage, setSelectedImage] = useState(photos[0] ? photos[0] : defaultImages )
    return (
        <>
            <div key={`flower${uuidv4()}`} className={cartPageStyle.blokLeft}>
                <img src={selectedImage} alt=''/>
            </div>
            <div className={cartPageStyle.blokRight}>
                <h1>{ flowerName }</h1>
                <div className={cartPageStyle.aboutPrice}>
                    <div className={cartPageStyle.price}>
                        <p>Last:<span>{ prices.lastPrice }$</span></p>
                        <p>Price: {prices.price * quantity}$</p>
                    </div>
                    {prices.sale !== '0' && <p className={cartPageStyle.sale}>{ prices.sale }%<LoyaltyIcon/></p>}
                </div>
                <p className={cartPageStyle.description}>{description.aboutFlower}</p>
                <div className={cartPageStyle.photos}>
                    {
                        photos.map((item,i) => {
                            return(
                                <div
                                    key={`images${uuidv4()}V${i}`}
                                    onClick={() => setSelectedImage(item)}
                                    className={selectedImage === item ? cartPageStyle.selected1 : cartPageStyle.selected}
                                >
                                    <img src={item} alt=''/>
                                    <div className={cartPageStyle.div}/>
                                    <span/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={ cartPageStyle.quantity }>
                    <IconButton
                        onClick={ () => {
                            !quantity <= 1 ? setQuantity( ( quantity - 1 ) ) : setQuantity( 1 )
                        } }
                        disabled={ quantity <= 1 }
                        className={ darkOrLight ? cartPageStyle.dark : cartPageStyle.light }>
                        <RemoveIcon/>
                    </IconButton>
                    <TextField
                        className={ cartPageStyle.inputQuantity }
                        type='number'
                        label='Quantity'
                        color={'primary'}
                        helperText={ `On sale: ${ description.onSale }` }
                        value={ quantity }
                        onChange={ e => {
                            if ( +e.target.value > description.onSale ) {
                                setQuantity( description.onSale )
                            } else if ( +e.target.value < 0 ) {
                                setQuantity( 1 )
                            } else {
                                setQuantity( +e.target.value )
                            }
                        } }
                    />
                    <IconButton
                        onClick={ () => {
                            ( description.onSale >= quantity + 1 ) ? setQuantity( quantity + 1 ) : setQuantity( description.onSale )
                        } }
                        disabled={ ( description.onSale === quantity ) }
                        className={ darkOrLight ? cartPageStyle.dark : cartPageStyle.light }>
                        <AddIcon/>
                    </IconButton>
                </div>
                <div className={cartPageStyle.buttons}>
                    <button onClick={() => dispatch(deleteProductInCart(_id))}>Remove product</button>
                    <button className={cartPageStyle.buy}><Link to='/buy'>Buy now</Link></button>
                </div>
            </div>
        </>
    )
}

export default CartProduct;
