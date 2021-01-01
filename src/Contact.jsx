import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import footImg from './Images/foot.jpg';






const Contact = () => {

        return (

            <>
                    <div className = 'container-fluid footer' id='footer'>
                <div className = 'row'>
                    <div className='col'>
                        <div className='text-center'>
                       <h1>Sandeep Sharma</h1>
                       <h5 className = 'text-center'>Made with <strong style = {{color:'red'}}> ❤️ </strong> in India.</h5> 
                        </div>
                    </div>
                </div>

                <div className='socialFooter'>
                        <div className='row'>
                        <div className='col-2'></div>
                            
                        <div className = 'col-4 copyright'>
                                <h6 className="copyClass"><strong>No © copyright issues.</strong></h6>
                                <h6 className="copyClass">Feel free to copy.</h6>
                                <h6 className="copyClass"> But don't forget to put your own creativity. ㊗️</h6>

                            </div>

                                <div className='col-4 FootIcons' >

                                                <h6>You can contact me anytime.</h6>

                                <a href='https://www.linkedin.com/in/sandeep-sharma-63162619b/'><LinkedInIcon 
                                style = {{fontSize:'5rem', color:'#287bbc'}} className='lastSocial'/></a>
                             

                                <a href='https://twitter.com/Sandy97465592'> <TwitterIcon
                                 style = {{fontSize:'5rem', color:'#1DA1F2'}} className='lastSocial' /></a>

                                <a href='https://www.facebook.com/sharmas185'><FacebookIcon
                                 style = {{fontSize:'5rem', color:'#4267B2'}} className='lastSocial' /></a>

                                <a href='https://www.instagram.com/sandy_s004/'><InstagramIcon
                                 style = {{fontSize:'5rem', color:'#ff4646'}} className='lastSocial' /></a>


                            </div>

                            <div className='col-2'></div>

                        </div>

                        </div>

                        <div className='row footerImg'>
                           
                                <img src = {footImg} alt='footer_Img' />
                           
                        </div>


                   </div>
            

            </>
        );

};


export default Contact;