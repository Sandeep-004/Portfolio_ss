import React from 'react';
import Chip from '@material-ui/core/Chip';


const GameChip = () => {
    return(
        <>

        <div className="chipDiv">
                   <Chip 
                 label= 'HTML'
                 clickable
            />&nbsp;

            <Chip 
                label='CSS'
                clickable
            />&nbsp;

            <Chip
                label='JavaScript'
                clickable
            />&nbsp;

            <Chip
               label='React'
               clickable
            />
        </div>
        </>
    );
};


export default GameChip;