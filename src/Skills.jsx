import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import html from '../src/Images/html.png';
import css from '../src/Images/css.png';
import js from '../src/Images/js.png';
import mongo from '../src/Images/mongo.png';
import express from '../src/Images/express.png';
import react from '../src/Images/react.png';
import Node from '../src/Images/Node.png';


const Skills = () => {

    return (

        <>
            <div className='container-fluid skillPart' id='skills'>
            <h1 className='text-center'>Skills</h1>
                <div className='row skillHead1'>

                    <div className='col-4'>
                        <img className='skillImg' src = {html} alt='html_Img' />
                        <h4>HTML</h4>
                    </div>

                    <div className='col-4'>
                        <img className='skillImg' src = {css} alt='css_Img' />
                        <h4>CSS</h4>
                    </div>

                    <div className='col-4'>
                        <img className='skillImg' src = {js} alt='js_Img' />
                        <h4>JavaScript</h4>
                    </div>

                      
                </div>

                
                <div className='row skillHead2'>

                <div className='col-3'>
                        <img className='skillImg' src = {mongo} alt='mongo_Img' />
                        <h4>MongoDB</h4>
                    </div>

                    
                <div className='col-3'>
                        <img className='skillImg' src = {express} alt='express_Img' />
                        <h4>Express.js</h4>
                    </div>

                    <div className='col-3'>
                        <img className='skillImg' src = {react} alt='react_Img' />
                        <h4>React</h4>
                    </div>
            
                    <div className='col-3'>
                        <img className='skillImg' src = {Node} alt='Node_Img' />
                        <h4>Node.js</h4>
                    </div>
                    
                    

                      
                </div>

            </div>
        </>
    );


};



export default Skills;