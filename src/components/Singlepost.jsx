import React, { Component } from 'react';
import profile from './images/profil.png'
import threedot from './images/threedot.jpg'
import dpost from './images/dpost.jpg'
import like from './images/like.png'
import heart from './images/heart.png'
import comment from './images/comment.png'
import share from './images/share.png'
import smile from './images/smile.png'





const Single_post_comp = (props) => {
    return (  
        <>
            <div className="postdiv">
                <div className="posttitle">
                    <span>
                        <img src={profile} alt="" />
                        <p>Shivam Bhilarkar</p>
                        
                        <img src={threedot} alt="" className="threedot" />
                    </span>
                    

                </div>
                <div className="postimage">
                    {/* <img src={require('./images/dpost.jpg')} /> */}
                    <img src={require( `${ props.post_image}`)} />

                    
                </div>
                <div className="postlike">
                    <ul>
                        <li><img src={heart} alt=""  /></li>
                        <li><img src={comment} alt=""  /></li>
                        <li><img src={share} alt=""  /></li>
                    </ul>
                    <p className='likeby'> 👨🏾 like by shivam_bhilarkar and 128 others</p>
                    <p className="fent"> View All 5 Comments </p>
                    <p className="fent2"> 5 hours ago</p>

                    

                </div>
                <div className="postcomnt">
                    <img src={smile} alt="" />
                    <input type="text" placeholder='Add a Comment...'/>
                    <p><a href=""> Post </a></p>

                </div>

            </div>
        
        </>
    );
}
 
export default Single_post_comp;