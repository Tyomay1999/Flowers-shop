import React from "react"
import loadingStyles from './loading.module.scss'
import {LoadingPhotos} from '../../Assets/Images/LoadingImg/index'
import { useSelector } from "react-redux";

const Loading = () => {
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight )

    return (
        <div className={loadingStyles.container}>
            <div className={darkOrLight ? loadingStyles.wrapperLigth : loadingStyles.wrapperDark}>
               <img
                   className={darkOrLight ? loadingStyles.loadingLigth :loadingStyles.loadingDark}
                   src={darkOrLight ? LoadingPhotos.loadingLigth : LoadingPhotos.loadingDark} alt=''
               />
               <div className={darkOrLight ? loadingStyles.loadingLigthDiv :loadingStyles.loadingDarkDiv}/>
            </div>
        </div>
    )
}

export default Loading;