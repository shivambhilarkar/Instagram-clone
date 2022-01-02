import React, { Component } from 'react';
import mbl from './images/mbl.jpg'
import instahead from './images/instaname.png'
import playios from './images/pngegg.png'
import playand from './images/playstyore.png'
import { Link } from 'react-router-dom';


const Login = () => {
    return ( 
        <>
            <div className="login_container">

                <div className="login_left">
                    <img src={mbl} alt="" />

                    
                </div>

                <div className="login_right">

                    <div className="login_form">

                        <img className='instahead' src={ instahead } alt=""  />
                        <input type="email" className="login_input" placeholder='Phone number , username, or email '/> <br/>
                        <input type="password"  className="login_input" placeholder='Password' />  <br/>

                        {/* <Link to='/home'> <button className="login_btn"> Log In</button></Link>  */}
                        <button className="login_btn"> <Link to= '/home'> Log In</Link> </button>


                        <hr />
                        <br />
                        <p> <a href="">🟦 Login with facebook</a> </p>
                        <br />
                        <p>Forgot password ?</p>

                    </div >
                    

                    <div className='login_sign_div'>
                        <p> Don't have an account? <a href=''> Sign up </a>  </p> 
                    </div>

                    

                    <div className="download_btns">
                         <p>Get the app</p>
                        <div className="last_inside">
                            <img src= { playios } alt="" className="last_last_img" />
                            <img src= { playand } alt="" className="last_last_img" />


                        </div>
                    </div>
                </div>


            </div>
        
        </>
     );
}
 
export default Login;