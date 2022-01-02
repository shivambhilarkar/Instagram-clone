import React, { Component } from 'react';
import profile from './images/profil.png'


const Single_sugg = (props) => {
    return (  
        <>
            <div className="sugg_row">
                <img src={profile} alt="" />
                <span>
                    <li>{ props.title }</li>
                    <li className='fldby'>New to Instagram</li>
                </span>
                <p>Follow</p>
            </div>
        </>
    );
}
 
export default Single_sugg;