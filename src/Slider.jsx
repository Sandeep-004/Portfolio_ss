import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Img2 from './Images/Me2.jpg';
import Img3 from './Images/Me3.jpg';
import Img4 from './Images/Me5.jpg';
import Img5 from './Images/Me6.jpg';

import { Carousel } from "react-bootstrap";



const Slider = () => {

    return (

        <>
            <div className = 'slider'>

            <h1 className = 'text-center'>My Gallery</h1>

            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>My College Friends <strong style={{color:'red'}}>❤️</strong></h3>
      <p>“Friendship is born at that moment when one person says to another,
       ‘What! You too? I thought I was the only one.”</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Maheshwar Trip <strong style={{color:'#c70039'}}>❤️</strong></h3>
      <p> “Once a year, go somewhere you have never been before.” </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Mee <strong style={{color:'#ff4646'}}>❤️</strong> </h3>
      <p>“Some beautiful paths can't be discovered without getting lost.”</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>प्रयागराज <strong style={{color:'#0a043c'}}>❤️</strong>  </h3>
      <p>“In order to see birds it is necessary to become a part of the silence.”</p>
    </Carousel.Caption>
  </Carousel.Item>

  
  
</Carousel>
</div>
            
        </>
         
        
    );
};

export default Slider;