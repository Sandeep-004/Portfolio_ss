import React from 'react';
import Chip from '@material-ui/core/Chip';


const CharityChip = () => {
    return(
        <>

            <div className = "chipDiv">
            <Chip 
                 label= 'HTML'
                 clickable
            />

            <Chip 
                label='CSS'
                clickable
            />

            <Chip
                label='JavaScript'
                clickable
            />
            <Chip
               label='jQuery'
               clickable
            /><br/><br/>

            <Chip
               label='Node.js'
               clickable
            />

            <Chip
               label='Express.js'
                clickable
            />
            
            </div>

        </>
    );
};


export default CharityChip;