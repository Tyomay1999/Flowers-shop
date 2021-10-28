import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import buyNowStyle from './buyNow.module.scss';
import AmericanCard from '../../Assets/Cards/AE.png'
import VisaCard from '../../Assets/Cards/VC.png'
import MasterCard from '../../Assets/Cards/MC.png'

const cards = {
    AmericanExpress: 3,
    master: 5,
    visa: 4,
}
const BuyNow = () => {
    // const darkOrLight = useSelector(state => state?.changeMode.darkOrLight);
    // const dispatch = useDispatch();
    const [cardType,setCardType] = useState(VisaCard)
    const [cardInfo, setCartInfo] = useState( {
        first: '',
        second: '',
        thirty: '',
        fourth: '',
        cvv: '',
        expirationDate: ['', ''],
        date: ''
    } )
    console.log( cardInfo, 'cardInfo' );
    return (
        <div className={ buyNowStyle.main }>

            <div className={ buyNowStyle.checkout }>
                <div className={ buyNowStyle['credit-card-box'] }>
                    <div className={ buyNowStyle.flip }>
                        <div className={ buyNowStyle.front }>
                            <div className={ buyNowStyle.chip }/>
                            <div className={ buyNowStyle.logo }>
                                <img src={cardType} alt='cardType'/>
                            </div>
                            <p className={ buyNowStyle.number }>{ cardInfo.first } { cardInfo.second } { cardInfo.thirty } { cardInfo.fourth }</p>
                            <div className={ buyNowStyle['card-holder'] }>
                                <label>Card holder</label>
                                <div>{ cardInfo.cardHolder }</div>
                            </div>
                            <div className={ buyNowStyle['card-expiration-date'] }>
                                <label>Expires</label>
                                <div>{cardInfo.expirationDate[0]}/{cardInfo.expirationDate[1]}</div>
                            </div>
                        </div>
                        <div className={ buyNowStyle.back }>
                            <div className={ buyNowStyle.strip }/>
                            <div className={ buyNowStyle.logo }>
                                <img src={cardType} alt='CardTypes'/>
                            </div>
                            <div className={ buyNowStyle.ccv }>
                                <label>CCV</label>
                                <div>{ cardInfo.cvv }</div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className={ buyNowStyle.form } autoComplete="off" noValidate>
                    <fieldset>
                        <label htmlFor="card-number">Card Number</label>
                        <input onChange={ ( e ) => {
                            setCardType(+e.target.value[0] === 3 ? AmericanCard : +e.target.value[0] === 4 ? VisaCard : MasterCard )
                            setCartInfo( { ...cardInfo, first: e.target.value } )
                        } } type="num"
                               id="card-number" className={ buyNowStyle['input-cart-number'] } maxLength="4"/>
                        <input onChange={ ( e ) => setCartInfo( { ...cardInfo, second: e.target.value } ) } type="num"
                               id="card-number-1" className={ buyNowStyle['input-cart-number'] } maxLength="4"/>
                        <input onChange={ ( e ) => setCartInfo( { ...cardInfo, thirty: e.target.value } ) } type="num"
                               id="card-number-2" className={ buyNowStyle['input-cart-number'] } maxLength="4"/>
                        <input onChange={ ( e ) => setCartInfo( { ...cardInfo, fourth: e.target.value } ) } type="num"
                               id="card-number-3" className={ buyNowStyle['input-cart-number'] } maxLength="4"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="card-holder">Card holder</label>
                        <input onChange={ ( e ) => setCartInfo( {
                            ...cardInfo,
                            cardHolder: e.target.value.toUpperCase()
                        } ) } type="text" id="card-holder"/>
                    </fieldset>
                    <fieldset className={ buyNowStyle['fieldset-expiration'] }>
                        <label htmlFor="card-expiration-month">Expiration date</label>
                        <div className={ buyNowStyle.select }>
                            <select
                                onChange={ ( e ) => setCartInfo( {
                                    ...cardInfo,
                                    expirationDate: [e.target.value, cardInfo.expirationDate[1]]
                                } ) }
                                id="card-expiration-month">
                                <option/>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div className={ buyNowStyle.select }>
                            <select
                                onChange={ ( e ) => setCartInfo( {
                                    ...cardInfo,
                                    expirationDate: [cardInfo.expirationDate[0],e.target.value]
                                } ) }
                                id="card-expiration-year">
                                <option/>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className={ buyNowStyle['fieldset-ccv'] }>
                        <label htmlFor="card-ccv">CCV</label>
                        <input onChange={ ( e ) => setCartInfo( { ...cardInfo, cvv: e.target.value } ) } type="text"
                               id="card-ccv" maxLength="3"/>
                    </fieldset>
                    <button onClick={ ( e ) => e.preventDefault() } className={ buyNowStyle.btn }><i
                        className="fa fa-lock"/> submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BuyNow
