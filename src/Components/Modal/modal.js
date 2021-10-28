import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import modalStyles from './modal.module.scss';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { defaultImages } from '../../Assets/Images/DefaultsImg/defaults'
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { useSelector } from "react-redux";
import Card from './../List/Card/card';

const Modal = ( props ) => {
    const modalData = useSelector(state => state?.productModalData.productModalData)
    const similarData = useSelector(state => state?.productModalData.similarData)
    const { setShowModal, darkOrLight } = props
    const { flowerName, prices, photos, description, tags } = modalData;
    const { uploadPhoto } = defaultImages;
    const [quantity, setQuantity] = useState( 1 )
    // const [toTop, setToTop] = useState( 0 )
    const [selectedImage, setSelectedImage] = useState( photos ? photos[0] : uploadPhoto )
    const animation = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: '-100%'
        },
    }
    const toTopRef = useRef( null )
    const scroll2 = ( scrollOffset ) => {
        toTopRef.current.scrollTop = 0;
    };
    return (
        <section
            ref={ toTopRef }
            onClick={ () => setShowModal( false ) }
            className={ modalStyles.main }>
            <motion.div
                initial='out'
                animate='in'
                exit='out'
                transition={ { duration: 1 } }
                variants={ animation }
                className={ modalStyles.container }
                onClick={ e => e.stopPropagation() }
            >
                <CloseSharpIcon
                    onClick={ () => {
                        setShowModal( false )
                    } }
                    className={ modalStyles.close }
                />
                <section className={ modalStyles.wrapper }>
                    <h1>{ flowerName }</h1>
                    <div className={ modalStyles.product }>
                        <div className={ modalStyles.image }>
                            <img src={ selectedImage } alt=''/>
                        </div>
                        <div className={ modalStyles.description }>
                            <div className={ modalStyles.lastPriceAndSale }>
                                <h3>Sale:{ prices.sale }<LoyaltyIcon/></h3>
                                <h4>Last Price: <span>{ prices.lastPrice }$</span></h4>
                            </div>
                            <h2 className={ modalStyles.price }>Price:{ quantity * prices.price }$</h2>
                            <div className={ modalStyles.quantity }>
                                <IconButton
                                    onClick={ () => {
                                        !quantity <= 1 ? setQuantity( ( quantity - 1 ) ) : setQuantity( 1 )
                                    } }
                                    disabled={ quantity <= 1 }
                                    className={ darkOrLight ? modalStyles.dark : modalStyles.light }>
                                    <RemoveIcon/>
                                </IconButton>
                                <TextField
                                    className={ modalStyles.inputQuantity }
                                    type='number'
                                    label='Quantity'
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
                                    className={ darkOrLight ? modalStyles.dark : modalStyles.light }>
                                    <AddIcon/>
                                </IconButton>
                            </div>
                            <p>
                                {
                                    description.aboutFlower
                                }
                            </p>
                            <div className={ modalStyles.morePhoto }>
                                {
                                    photos.map( ( elem, index ) => {
                                        return (
                                            <div key={ index } onClick={ () => {
                                                setSelectedImage( elem )
                                            } }>
                                                <img src={ elem } alt='nextPhoto'/>
                                                <div/>
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={ modalStyles.buttonsAndTags }>
                        <div className={ modalStyles.tags }>
                            {
                                tags.map( ( elem, index ) => <div key={ index }><span>#{ elem }</span></div> )
                            }

                        </div>
                        <div className={ modalStyles.buttons }>
                            <button className={ darkOrLight ? modalStyles.buyDark : modalStyles.buyLight }>Buy now
                            </button>
                        </div>
                    </div>

                    <div className={ modalStyles.similar }>
                        <h3 className={ darkOrLight ? modalStyles.titleDark : modalStyles.titleLight }>Similar:<ArrowDownwardIcon/>
                        </h3>
                        <div className={ modalStyles.similarBlok }>
                            {
                                similarData?.map( ( flower, index ) => {
                                    return (
                                        <Card scroll={scroll2} toTop={ true } setShowModal={ setShowModal }
                                              flower={ flower } key={ index }/>
                                    )
                                } )
                            }
                        </div>
                    </div>
                </section>
            </motion.div>
        </section>
    )
}

export default Modal
