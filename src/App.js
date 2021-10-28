import React, {useEffect, useState} from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Loading from "./Components/Loading/loading";
import Auth from './Components/Auth/auth';
import Login from './Components/Login/login';
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import List from "./Components/List/list";
import Modal from "./Components/Modal/modal";
import TestFunc from "./Test/test";
import { Provider } from "react-redux";
import store from './Redux/reduxStore'
import NotFound from "./Components/NotFound/notFound";
import CartPage from "./Components/CartPage/cartPage";
import BuyNow from "./Components/BuyNowPage/buyNow";

const App = () => {
    const [loading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [cartModal, setCartModal] = useState(false)
    // const get = async () => {
    //     fetch('/api/data').then(res => res.json()).then(res => console.log(res))
    // }
    useEffect(() => {
        showModal ? document.getElementById('body').style.overflow = 'hidden' : document.getElementById('body').style.overflowY = 'scroll'
        // get()        
    },[showModal])
    if (loading) {
        return <Loading />
    }
    return (
       <Provider store={store}>
           <section className='app'>
               <BrowserRouter>
                   {showModal && <Modal setShowModal={setShowModal} />}
                   <Navbar cartModal={cartModal} setCartModal={setCartModal} />
                   <Route path='/auth' component={Auth} />
                   <Route  path='/loading' component={Loading} />
                   <Route exact  path='/'>
                       <List
                           setCartModal={setCartModal}
                           setShowModal={setShowModal}
                       />
                   </Route>
                   <Route path='/login' component={Login} />
                   <Route path='/test' component={TestFunc} />
                   <Route path='/notfound' component={NotFound} />
                   <Route path='/cart' component={CartPage} />
                   <Route path='/buy' component={BuyNow} />
                   <Footer />
               </BrowserRouter>
           </section>
       </Provider>
    );
}

export default App;
