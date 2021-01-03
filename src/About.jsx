import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import avatar from './Images/jon.svg'



const About = () => {

    return (

        <>

            <div className='container-fluid aboutPart' id = 'about'>
                <div className='row'>

                        <div className='col-1'>

                            
                        <div className='social'>
                            <a href='https://www.gmail.com'><MailOutlineIcon  
                           className='socialLogo' style = {{fontSize:'5rem', color:'#d14836'}} /></a>

                            <a href='https://www.linkedin.com/in/sandeep-sharma-63162619b/'><LinkedInIcon 
                           className='socialLogo' style = {{fontSize:'5rem', color:'#287bbc'}}/></a>
                                 

                                <a href='https://github.com/Sandeep-004'>  <GitHubIcon
                                className='socialLogo' style = {{fontSize:'5rem', color:'#333'}}/></a>


                                <a href='https://twitter.com/Sandy97465592'> <TwitterIcon
                                className='socialLogo' style = {{fontSize:'5rem', color:'#1DA1F2'}} /></a>

                                <a href='https://www.facebook.com/sharmas185'><FacebookIcon
                                className='socialLogo' style = {{fontSize:'5rem', color:'#4267B2'}} /></a>

                            </div>

                        </div>


                    <div className='col-4'>
                          <div className='avatar'>  

                          <img src={avatar} alt= 'Avatar'/>
                        </div>
                            <div className='resume'>
                          <a href = 'https://drive.google.com/drive/u/0/my-drive'> 
                           <Button variant="outlined" color="secondary">
                                 Download my Resume
                            </Button></a>
                            </div>


                    </div>
                    <div className = 'col-6'>
                    <div className = 'aboutMe'>

                            <h1>About me</h1>

                            <p>
                            Hi I am Sandeep Sharma, a passionate Full Stack developer. 
                            I discovered my passion for development when I was in my Graduation and
                             since then I've been learning, working and improving my skills.
                              The reason I love this so much, is may be because of the feeling it gives me,
                               when I see my "Codes" adding values in someone's life and
                                that is what gives me more power to work and keeps me motivated.
                            </p>
                       <h5>My Email : <strong style = {{color: '#0278ae'}}> sharmas175@gmail.com </strong></h5>
                        </div>    
                    </div>
                    <div className='col-1 mail'>

                    </div>
                </div>

            </div>

        </>
    );


};



export default About;