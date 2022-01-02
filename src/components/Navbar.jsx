import React, { Component } from 'react';
import instaname from './images/instaname.png'
import home from './images/home.svg'
import profile from './images/profil.png'
import messenger from './images/messenger.svg'
import compass from './images/compass.png'
import heart from './images/heart.png'
import  pluse from './images/plus.png'




const Navbar = () => {
    return ( 

        <>
            
            <nav className="instanav">

                <div className="left">
                    <img src={ instaname} alt="" />

                </div>

                <div className="mid">
                    <input type="search" placeholder=' 🔍 Search'/>

                </div>

                <div className="right">
                    
                    <ul>
                        <li> <img src={home} alt="" /></li>
                        <li> <img src={messenger} alt="" /></li>
                        <li> <img src={pluse} alt="" /></li>
                        <li> <img src={compass} alt="" /></li>
                        <li> <img src={heart} alt="" /></li>
                        <li> <img src={profile} alt="" /></li>

                    </ul>
                    
                </div>


            </nav>
        
        </>
     );
}
 
export default Navbar;