import React, { Component } from 'react';
import Right_part from './Right_part';
import Single_post_comp from './Singlepost';
import Stories from './Stories';

const Main_cont = () => {
    return (  
        <>
        
            
            <div className="main_container">

                <div className="main_cont_left">
                    <Stories />
                    <Single_post_comp post_image={'./images/posts/dpost.jpg'} />
                    <Single_post_comp post_image={'./images/posts/post1.jpg'} />
                    <Single_post_comp post_image={ './images/posts/post2.jpg'}/>
                    <Single_post_comp post_image={ './images/posts/post3.jpg'}/>
                    <Single_post_comp post_image={ './images/posts/post4.jpg'}/>
                    <Single_post_comp post_image={ './images/posts/post5.jpg'}/>
                    <Single_post_comp post_image={ './images/posts/post6.jpg'}/>
                    

                </div>

                <div className="main_cont_right">
                    <Right_part/>

                </div>

            </div>

            
        </>
    ) ;
}
 
export default Main_cont; 
<>

</>  