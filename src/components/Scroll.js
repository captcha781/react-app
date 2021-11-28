import React from 'react';

const Scroll = (props) => {
    return(
        //used to provide a scroll view
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '100%'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
