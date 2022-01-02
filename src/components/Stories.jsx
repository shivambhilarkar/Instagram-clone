import React, { Component } from 'react';
import profile from './images/profil.png'
import Single_Story from './Single_story';

 
const Stories = () => {
    return ( 
        <>
            <div className="story_div">

                <ul>
                    <Single_Story title={"shivambbhilarkrar"} img_url={'./images/profil.png'} />
                    <Single_Story title={ "anas27"} img_url={'./images/posts/post1.jpg'} />
                    <Single_Story title={ "vaishvk"} img_url={'./images/posts/post2.jpg'}/>
                    <Single_Story title={ "manish"} img_url={'./images/posts/post3.jpg'}/>
                    <Single_Story title={ "abhim"} img_url={'./images/posts/post4.jpg'}/>
                    <Single_Story title={"shivam2"} img_url={'./images/posts/post5.jpg'}/>
                    <Single_Story title={"shivamb"} img_url={'./images/posts/post6.jpg'}/>
                    <Single_Story title={ "anas27"} img_url={'./images/posts/post3.jpg'}/>
                    <Single_Story title={ "vaishvk"} img_url={'./images/posts/post2.jpg'}/>
                    <Single_Story title={ "manish"} img_url={'./images/posts/post1.jpg'}/>
                    <Single_Story title={ "abhim"} img_url={'./images/posts/post5.jpg'}/>
                    <Single_Story title={ "shivam2"} img_url={'./images/posts/post6.jpg'}/>
                    
                    
                   
                    
                </ul>

            </div>
            
        </>
     );
}
 
export default Stories;