import React from 'react';
// import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Menu = () => {

            return (

                <>
                     <ul className = 'text-center menu'>
                        <li>
                        <Link smooth exact  to = '#about'> 
                        About
                        </Link></li>
                        <li>
                        <Link smooth exact to = '#skills'>
                         Skills 
                         </Link></li>
                        <li>
                        <Link smooth exact to = '#project'> 
                        Project
                         </Link></li>
                        <li>
                        <Link smooth exact to = '#footer'>
                         Contact 
                         </Link></li>

                    </ul>

                </>
            );
};

export default Menu;