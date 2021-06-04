import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : <div> test</div>
);

export default backdrop;