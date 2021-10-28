import React, {  useRef } from 'react'
import listStyle from './list.module.scss'
import Card from './Card/card'
import Filter from './Filter/filter'
import ImagesSlider from "../Slider/slider";
import SearchBar from './Search/searchBar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useSelector } from "react-redux";
// import TestFunc from '../../Test/test';


const List = ({setModalData,setShowModal,setCartModal}) => {
    const products = useSelector(state => state?.products.products)
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    const sliderData = useSelector(state => state?.sliderData.sliderData)
    const scrollToTop = useRef(null)
    // const filterByPrice = useSelector(state => state?.filterData.filterByPriceData);
    // const filterByGrowth = useSelector(state => state?.filterData.filterByGrowthData);
    // const filterByFlowerName = useSelector(state => state?.filterData.filterByFlowerNameData);
    const filterByColors = useSelector(state => state?.filterData.filterByColorsData);
    let data = filterByColors ? filterByColors : products
    const scrolling = (position) => {
        scrollToTop.current.scrollTop = position;
    }

    return (
        <section onClick={() => {setCartModal(false)}}  className={listStyle.main}>
            <Filter/>
            <div className={listStyle.content} >
                <ImagesSlider sliderData={sliderData}/>
                <SearchBar />
                {/* <TestFunc /> */}
                <div className={listStyle.productPanel} ref={scrollToTop}>
                {
                    data.map((elem,index) => {
                        return(
                            <Card setModalData={setModalData} setShowModal={setShowModal} flower={elem} key={index}/>
                        )
                    })
                }
                </div>
            </div>
            <button
                onClick={() => scrolling(0)}
                className={darkOrLight ? listStyle.toTop : listStyle.toTop1} ><ExpandLessIcon /></button>
        </section>
    )
}

export default List
