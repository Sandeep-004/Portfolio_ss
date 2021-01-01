import React from 'react';
import Chip from '@material-ui/core/Chip';


const ToDoChip = () => {
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
            />&nbsp;<br/><br/>

            
            <Chip
               label='Material ui'
               clickable
            />
        </div>
        </>
    );
};


export default ToDoChip;