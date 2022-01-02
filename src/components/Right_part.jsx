import React, { Component } from 'react';
import profile from './images/profil.png'
import profilewhite from './images/profilwhite.png'

import Single_sugg from './Single_suggestion';


const Right_part = () => {
    return (
        <>
            <div className="right_container">
                <div className="right_profile">
                    <img src={profilewhite} alt="" />
                    <span> 
                        <li>Shivam Bhilarkar</li>
                        <li className='userid'>shivam_bhilarkar</li>
                    </span>

                    <p> <a href="">  Switch </a></p>

                </div>
                <div className="suggestion">
                    <div className="suggestiong_heading">
                        <p className='sgnt'>Suggestion For you</p>
                        <p>See All</p>
                    </div>

                    <Single_sugg title={ "shivam_bhilarkar"}/>
                    <Single_sugg title={ "anas_patni"}/>
                    <Single_sugg title={ "manish_jadhav"}/>
                    <Single_sugg title={ "saurbh_pawar"}/>
                    <Single_sugg title={ "abhijeet_mane"}/>
                    
                </div>
                <div className="footer">

                    <ul>
                        <li>About</li>
                        <li>• Help</li>
                        <li>• Press</li>
                        <li>• API</li>
                        <li>• Jobs</li>
                        <li>• Privacy</li>
                        <li>• Term</li>
                        <li>• Locations</li>
                        <li>• Top Accounts</li>
                        <li>• Hashtags</li>
                        <li>• Languages</li>
                    </ul>

                    <ul>
                        <li>©️ 2021 INSTAGRAM FROM META</li>
                    </ul>

                </div>

            </div>
    
        </>
    );
}
 
export default Right_part;