import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Dots from './Dots';




const Header = () => {

    return (

        <>
            <div className = 'container-fluid'>
                    
                <div className = 'Header'>
                <Menu />
                    <menu>
                        <Switch>
                            <Route exact path = './about' component={About}/>
                            <Route exact path='/skills' component = {Skills} />
                            <Route exact path = '/project' component = {Project}/>
                            <Route exact path = '/contact' component  = {Contact}/>

                        </Switch>
                    </menu>
                <Dots />
                   
                    <div className = 'photo'>
                        
                    </div>

                    <div className = 'myDetail'>
                        <h1>Sandeep Sharma</h1>
                        <h4>I am a <strong> Full Stack Developer </strong></h4>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Header;
