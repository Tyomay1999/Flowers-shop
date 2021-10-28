import React, { useState } from 'react';
import navbarStyles from './navbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation, withRouter } from 'react-router';
import { FormControlLabel, Switch } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setDarkOrLight } from "../../Redux/changeModeReducer";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartWindow from "./CartWindow/cartWindow";

const Navbar = (props) => {
    const { history,cartModal, setCartModal } = props
    const path = history.location.pathname
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const darkOrLight = useSelector(state => state?.changeMode.darkOrLight)
    return (
        <>
            {
                location.pathname !== '/notfound' &&
                <nav onClick={() => {setCartModal(false)}} className={darkOrLight ? navbarStyles.main1 : navbarStyles.main}>
                    <input type="checkbox" id={navbarStyles.check} checked={isOpen} />
                    <label onClick={(e) => {e.stopPropagation();setOpen(!isOpen)}} className={navbarStyles.checkbtn}>
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </label>
                    <label onClick={(e) => {e.stopPropagation();history.push('/')}} className={navbarStyles.logo}>LOGO</label>
                    <FormControlLabel
                        onChange={(e) => {e.stopPropagation();dispatch(setDarkOrLight(!darkOrLight))}}
                        control={<Switch aria-label="Բացել Նոր Էջից" />}
                        label={darkOrLight ? 'Off dark mod' : 'On dark mod'} />
                        <ul>
                            <li
                                onClick={(e) => {e.stopPropagation();setCartModal(!cartModal)}}
                                className={cartModal ? navbarStyles.cart1 : navbarStyles.cart}>
                                <ShoppingCartIcon />
                                {cartModal && <CartWindow setCartModal={setCartModal} />}
                            </li>
                            <li>
                                <Link
                                    className={path === '/' ? navbarStyles.active : null}
                                    to="/"
                                >List</Link>
                            </li>
                            {/*<li><Link className={path === '/footer' ? navbarStyles.active : null} to="/footer">Foot</Link></li>*/}
                            <li>
                                <Link
                                    className={path === '/login' ? navbarStyles.active : null}
                                    to="/login"
                                >Login</Link>
                            </li>
                            <li>
                                <Link
                                    className={path === '/test' ? navbarStyles.active : null}
                                    to="/test"
                                >Test</Link>
                            </li>
                            {/*<li onClick={() => setShowModal(true)}><Link to={path} className={path === '/' ? navbarStyles.active : null} >Modal</Link></li>*/}
                        </ul>
                </nav>
            }
        </>
    )
}

export default withRouter(Navbar)
