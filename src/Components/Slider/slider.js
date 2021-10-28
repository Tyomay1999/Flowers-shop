import React from 'react';
import sliderStyles from './slider.module.scss';
import './sliderStyles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const ImagesSlider = ({sliderData}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className={ sliderStyles.main }>
            <div className='container mt-5 carousel'>
                <h1 className={sliderStyles.slider_title}>Top Products</h1>
            <Slider { ...settings }>
                {
                    sliderData.map(({flowerName,price,photo},index) => {
                        return(
                            <div key={index} className={sliderStyles['card-wrapper']}>
                                <div className={sliderStyles.new}><span>NEW</span></div>
                                <div className={sliderStyles.card}>
                                    <div className={sliderStyles['card-image']}>
                                        <img src={ photo } alt='productPhoto' />
                                    </div>
                                    <ul className={sliderStyles.showMore}>
                                        <li><a href='/lolololo'><MonetizationOnOutlinedIcon /></a> </li>
                                        <li><a href='/lolololo'><MoreHorizOutlinedIcon /></a> </li>
                                        <li><a href='/lolololo'><InfoOutlinedIcon /></a> </li>
                                    </ul>
                                    <div className={sliderStyles.details}>
                                        <h2>{ flowerName }<span className={sliderStyles['job-title']}>Price: { price }$</span> </h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    )
}

export default ImagesSlider;