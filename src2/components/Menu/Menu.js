import React from 'react'

const Menu = () => {
    return (
        <div className="footer-menu f jc-sa ai-c ">
           <ul className="f jc-sb menu-buttons ai-c">
               <li><a href="#"><img src="ic-099/path/home.svg"/></a></li>
               <li><a href="#"><img src="ic-099/path/favorites.svg"/></a></li>
               <li><a href="#"  className="add"><i class="fas fa-plus"></i></a></li>
               <li><a href="#"><img src="ic-099/path/search.svg"/></a></li>
               <li><a href="#"><img src="ic-099/path/menu.svg"/></a></li>
           </ul>
        </div>
    )
}




export default Menu
