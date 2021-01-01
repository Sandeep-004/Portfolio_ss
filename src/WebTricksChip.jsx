import React from 'react';
import Chip from '@material-ui/core/Chip';


const WebTricksChip = () => {
    return(
        <>
        <div className = "chipDiv">
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
               label='jQuery'
               clickable
            />&nbsp;<br/><br/>

            <Chip
               label='Node.js'
               clickable
            />&nbsp;

            <Chip
               label='Express.js'
                clickable
            />&nbsp;

            
            <Chip
               label='Heroku'
                clickable
            />
    </div>

        </>
    );
};


export default WebTricksChip;