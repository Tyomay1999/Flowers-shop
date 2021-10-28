import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
import notFoundStyle from './notFound.module.scss';
import { Link } from "react-router-dom";

const NotFound = () => {
    // const darkOrLight = useSelector(state => state?.changeMode.darkOrLight);
    // const dispatch = useDispatch();
    return (
        <div className={notFoundStyle.main}>
            <div className={notFoundStyle['error-page']}>
                <div>
                    <h1 data-h1="404">404</h1>
                    <p data-p="NOT FOUND">NOT FOUND</p>
                </div>
            </div>
            <Link to='/' className={notFoundStyle.back}>GO BACK</Link>
        </div>
    )
}

export default NotFound
