import React, { Component } from 'react';
import profile from './images/profil.png'


const Single_Story = (props) => {
    return (  
        <>
        
            <li className='single_str'>
                {/* <span> <img src={profile} alt="" title='shivam' /> </span> */}
                 <span> <img src={require( `${ props.img_url}`)} /> </span>   
                
                {/* <span>{ props.title}</span> */}
                <p> { props.title }</p>
            </li>
        </>
    );
}
 
export default Single_Story;