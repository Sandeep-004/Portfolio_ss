import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pro1 from '../src/Images/Charity.PNG';
import GitHubIcon from '@material-ui/icons/GitHub';
import pro2 from '../src/Images/tricks.PNG';
import LanguageIcon from '@material-ui/icons/Language';
import todo from '../src/Images/todo.PNG';
import series from '../src/Images/series.PNG'; 
import game from '../src/Images/game.PNG';
import google from '../src/Images/google.PNG';
import CharityChip from './CharityChip';
import WebTricksChip from './WebTricksChip';
import ToDoChip from './ToDoChip';
import SeriesChip from './SeriesChip';
import GameChip from './GameChip';
import EasyChip from './EasyChip';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();




const Project = () => {

    return (

         <>
           <div className = 'container-fluid projectPart' id = 'project'>
             <h1 className = 'text-center proHead'>Projects</h1><br/><br/>
              <div className = 'row cardPart1'>
                        
                <div className = 'col-4 cardSec '>

                  <div className="card" data-aos="flip-up" data-aos-offset="300"
                   data-aos-duration="1000"  >
                    <img className="card-img-top" src={pro1} alt="Card_Img" />
                     <div className="card-body">
                      <h5 className="card-title">Steps For Charity</h5>
                       <p className="card-text">
                            <h5>Tech used:</h5>
                            <CharityChip  />

                        </p>
                        <a href="https://github.com/Sandeep-004/Charity/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a>&nbsp;&nbsp;

                        <a href="https://github.com/Sandeep-004/Charity/tree/master" className="btn btn-secondary">
                        <LanguageIcon /></a>
                        
                          </div>
                        
                    </div>
                </div>
{/* ------------------------------------------------- */}
            <div className = 'col-4'>

                <div className="card" >
                 <img className="card-img-top" src={pro2} alt="Card_cap" />
                    <div className="card-body">
                        <h5 className="card-title">WebTricks</h5>
                            <p className="card-text">

                            <h5>Tech used:</h5>

                            <WebTricksChip />

                            </p>
                                 <a href="https://github.com/Sandeep-004/Project-Tutorial-web-/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a>&nbsp;&nbsp;

                        <a href="https://warm-falls-80535.herokuapp.com/tutorial" className="btn btn-secondary">
                        <LanguageIcon /></a>

                        </div>

                </div>

        </div>

{/* ------------------------------------------------- */}

        
<div className = 'col-4'>

        <div className="card" data-aos="flip-down"
         data-aos-offset="300" data-aos-duration="1000"  >
         <img className="card-img-top" src={todo} alt="Card_cap" />
            <div className="card-body">
                <h5 className="card-title">ToDo App</h5>
                    <p className="card-text">
                            <h5>Tech used:</h5>

                             <ToDoChip />

                    </p>
                        <a href="https://github.com/Sandeep-004/React-ToDo-App/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a> &nbsp;&nbsp;
                        
                        <a href="https://github.com/Sandeep-004/React-ToDo-App/tree/master" className="btn btn-secondary">
                        <LanguageIcon /></a>             
                  </div>  

            </div>

    </div>
</div>


{/* -------------------------------------------------- */}

              
                        <div className = 'row cardPart2'>
                        
                            <div className = 'col-4'>
                                <div className="card" data-aos="flip-up"
                                 data-aos-offset="300" data-aos-duration="1000" >
                                    <img className="card-img-top" src={series} alt="Card_cap" />
                                        <div className="card-body">
                                        <h5 className="card-title">Netflix/Amazon</h5>

                                        <p className="card-text">
                            <h5>Tech used:</h5>

                             <SeriesChip />

                    </p>                                                
                       <a href="https://github.com/Sandeep-004/React-netflix-/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a>                                          
                           </div>
                        
                    </div>
                 
            </div>

  {/* ----------------------------------------------------                   */}


            <div className = 'col-4'>

            <div className="card" >
                 <img className="card-img-top" src={game} alt="Card_cap" />
                    <div className="card-body">
                        <h5 className="card-title">Slot Machine Game</h5>
                            <p className="card-text">
                                <h5>Tech used:</h5>
                                <GameChip />
                            </p>
                                <a href="https://github.com/Sandeep-004/React-SlotGame-/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a>                    
                    </div>
    
            </div>
</div>
{/* ----------------------------------------------------------- */}



        <div className = 'col-4'>

            <div className="card" data-aos="flip-down"
             data-aos-offset="300" data-aos-duration="1000" >
                 <img className="card-img-top" src={google} alt="Card_cap" />
                    <div className="card-body">
                        <h5 className="card-title">Easy Keep</h5>
                           <p className="card-text">
                                <h5>Tech used:</h5>
                                <EasyChip />

                           </p>
                                <a href="https://github.com/Sandeep-004/React-EasyKeepApp-cloneGooglekeep/tree/master" className="btn btn-secondary">
                        <GitHubIcon /></a>
    
                    </div>
    
            </div>

     </div>

  </div>


</div>            
        </>
    );


};



export default Project;